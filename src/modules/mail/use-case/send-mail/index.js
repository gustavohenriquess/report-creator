const nodemailer = require("nodemailer");
const dateHelper = require("../../utils/date.js");

class SendMail {
  _user = process.env.MAIL_AUTH_USER;
  _pass = process.env.MAIL_AUTH_PASS;
  _to = process.env.MAIL_TO;
  _date = new Date();
  _year = this._date.getFullYear();
  _templatePath = process.env.TEMPLATE_PATH;
  _reportPath = `${process.env.REPORT_PATH}/${dateHelper.getMonthName(
    this._date.getMonth()
  )}-${this._year}.pptx`;

  async execute() {
    try {
      const splitPath = this._reportPath.split("/");
      const fileName = splitPath[splitPath.length - 1];

      const transporter = await this.config();
      const mail = {
        from: this._user,
        to: this._to,
        subject: `Report ${dateHelper.getMonthName(
          this._date.getMonth()
        )} - ${this._date.getFullYear()}`,
        text: "Report attached",
        attachments: [
          {
            filenaame: fileName,
            path: this._reportPath,
          },
        ],
      };

      return new Promise(function (resolve, reject) {
        transporter.sendMail(mail, (err, info) => {
          if (err) {
            console.log("error: ", err);
            reject(err);
          } else {
            console.log(`Mail sent successfully!`);
            resolve(info);
          }
        });
      });
    } catch (error) {
      console.log(error);
      response.status(500).json({ error: error.message });
    }
  }

  async config() {
    return nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: this._user,
        pass: this._pass,
      },
    });
  }
}

module.exports = new SendMail();
