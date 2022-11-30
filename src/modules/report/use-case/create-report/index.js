const PPTX = require("nodejs-pptx");
var fs = require("fs");
const dateHelper = require("../../utils/date.js");
const sendMail = require("../../../mail/use-case/send-mail");
const defaultInfo = require("../default-info");

class CreateReport {
  _date = new Date();
  _year = this._date.getFullYear();
  _commonPath = process.env.COMMON_PATH;
  _templatePath = process.env.TEMPLATE_PATH;
  _reportPath = `${
    process.env.REPORT_PATH
  }/Google Adwords - ${dateHelper.getMonthName(this._date.getMonth() - 1)}-${
    this._year
  }.pptx`;
  _reportInfo = [];

  async execute(request, response) {
    try {
      this._reportInfo = await defaultInfo.getInfo();

      if (request.body.month && request.body.year && request.body.report_type)
        await this.createPath(request.body);

      if (request.body.reportInfo) {
        this._reportInfo = request.body.reportInfo;
      }
      fs.copyFileSync(this._templatePath, this._reportPath);

      for (let i in this._reportInfo) {
        let info = this._reportInfo[i];

        if (info.type == "text" && !info.multiSlide) {
          await this.addText(
            this._reportPath,
            this._reportPath,
            info.slide,
            info.config
          );
        }

        if (info.type == "text" && info.multiSlide) {
          for (let j = info.slideStart; j <= info.slideEnd; j++) {
            await this.addText(
              this._reportPath,
              this._reportPath,
              "slide" + j,
              info.config
            );
          }
        }

        if (info.type == "image" && !info.multiSlide) {
          await this.addImage(
            this._reportPath,
            this._reportPath,
            info.slide,
            `${process.env.COMMON_PATH}/${info.path}`,
            info.x,
            info.y,
            info.width,
            info.height
          );
        }
      }

      await sendMail.execute(this._reportPath);

      await this.deleteFiles();

      return response.status(200).json({
        message: "Report created successfully",
      });
    } catch (error) {
      console.log(error);
      response.status(500).json({ error: error.message });
    }
  }

  async addImage(filePath, reportPath, slide, imagePath, x, y, width, height) {
    try {
      let pptx = new PPTX.Composer();
      await pptx.load(filePath);
      await pptx.compose(async (pres) => {
        await pres.getSlide(slide).addImage((image) => {
          image.file(imagePath).x(x).y(y).cx(width).cy(height);
        });
      });

      await pptx.save(reportPath);
    } catch (error) {
      console.log(error);
    }
  }

  async addText(filePath, reportPath, slide, config) {
    let pptx = new PPTX.Composer();
    await pptx.load(filePath);

    await pptx.compose(async (pres) => {
      await pres.getSlide(slide).addText(config);
    });

    await pptx.save(reportPath);
  }

  async deleteFiles() {
    fs.readdir(`${this._commonPath}`, (err, files) => {
      if (err) throw err;

      for (const file of files) {
        fs.unlinkSync(`${this._commonPath}/${file}`, (err) => {
          if (err) throw err;
        });
      }
    });
  }

  async createPath(body) {
    this._reportPath = `${process.env.REPORT_PATH}/${
      body.report_type
    } - ${dateHelper.getMonthName(body.month - 1)}-${body.year}.pptx`;

    this._reportInfo = await defaultInfo.getInfo(body);
  }
}

module.exports = new CreateReport();
