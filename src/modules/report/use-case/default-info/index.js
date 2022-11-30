const dateHelper = require("../../utils/date.js");

class DefaultInfo {
  _date = new Date();
  _year = this._date.getFullYear();
  _firstPageTitle = "";
  _generalTitle = "";

  async execute(req, res) {
    const report = await this.getInfo(req.query);

    return res.status(200).json({
      positionInfo: "x || y == 84.98 ==> 3cm",
      reportInfo: report,
    });
  }

  async getInfo(body) {
    const report = await this.reportInfo();

    await this.getGeneralTitle(body);

    report.unshift({
      type: "text",
      slide: "slide1",
      config: {
        value: this._firstPageTitle,
        x: 304.81,
        y: 505.66,
        cx: 305.94,
        cy: 24.07,
        textAlign: "center",
        textWrap: "none",
        fontSize: 14,
        fontFace: "Montserrat",
        textColor: "000000",
      },
    });

    report.unshift({
      type: "text",
      multiSlide: true,
      slideStart: 2,
      slideEnd: 10,
      config: {
        value: this._generalTitle,
        x: 660,
        y: 12.74,
        // textAlign: "center",
        textWrap: "none",
        fontSize: 14,
        fontFace: "Montserrat",
        textColor: "a0d911",
        fontBold: true,
      },
    });
    return report;
  }

  async getGeneralTitle(body) {
    if (!body || !body.year || !body.month || !body.report_type) {
      this._firstPageTitle = `Google Adwords - ${dateHelper.getMonthName(
        this._date.getMonth() - 1
      )} ${this._year}`;

      this._generalTitle = `Google Adwords | ${dateHelper
        .getMonthName(this._date.getMonth() - 1)
        .toUpperCase()} ${this._year}`;
    } else {
      this._firstPageTitle = `${body.report_type} - ${dateHelper.getMonthName(
        body.month - 1
      )} ${body.year}`;

      this._generalTitle = `${body.report_type} | ${dateHelper
        .getMonthName(body.month - 1)
        .toUpperCase()} ${body.year}`;
    }
  }

  async reportInfo() {
    return [
      {
        type: "image",
        slide: "slide2",
        path: `serie_temporal.png`,
        x: 68.55,
        y: 156.37,
        width: 821.81,
        height: 271.96,
      },
      {
        type: "image",
        slide: "slide3",
        path: `anuncios.png`,
        x: 84.98,
        y: 175.92,
        width: 367.7,
        height: 283.28,
      },
      {
        type: "image",
        slide: "slide3",
        path: `anuncios_mais_exibidos_2.png`,
        x: 506.51,
        y: 175.92,
        width: 367.7,
        height: 283.28,
      },
      {
        type: "image",
        slide: "slide4",
        path: `anuncios_mais_exibidos_3.png`,
        x: 84.98,
        y: 175.92,
        width: 367.7,
        height: 283.28,
      },
      {
        type: "image",
        slide: "slide4",
        path: `anuncios_mais_exibidos_4.png`,
        x: 506.51,
        y: 175.92,
        width: 367.7,
        height: 283.28,
      },
      {
        type: "image",
        slide: "slide5",
        path: `anuncios_mais_exibidos_5.png`,
        x: 84.98,
        y: 175.92,
        width: 367.7,
        height: 283.28,
      },
      {
        type: "image",
        slide: "slide5",
        path: `anuncios_mais_exibidos_6.png`,
        x: 506.51,
        y: 175.92,
        width: 367.7,
        height: 283.28,
      },
      {
        type: "image",
        slide: "slide6",
        path: `pagina destino.png`,
        x: 206.51,
        y: 63.17,
        width: 622.37,
        height: 416.71,
      },
      {
        type: "image",
        slide: "slide7",
        path: `dispositivos.png`,
        x: 84.98,
        y: 175.92,
        width: 367.7,
        height: 283.28,
      },
      {
        type: "image",
        slide: "slide7",
        path: `informacoes_demograficas.png`,
        x: 506.51,
        y: 175.92,
        width: 367.7,
        height: 283.28,
      },
    ];
  }
}

module.exports = new DefaultInfo();
