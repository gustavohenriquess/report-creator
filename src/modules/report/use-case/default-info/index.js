const dateHelper = require("../../utils/date.js");

class DefaultInfo {
  _date = new Date();
  _year = this._date.getFullYear();
  _firstPageTitle = "";
  _generalTitle = "";
  _reportInfo = [
    {
      type: "image",
      slide: "slide2",
      path: `./src/common/Série_temporal.png`,
      x: 68.55,
      y: 156.37,
      width: 821.81,
      height: 271.96,
    },
    {
      type: "image",
      slide: "slide3",
      path: `./src/common/Anúncios.png`,
      x: 84.98,
      y: 175.92,
      width: 367.7,
      height: 283.28,
    },
    {
      type: "image",
      slide: "slide3",
      path: `./src/common/Anúncios_mais_exibidos_2.png`,
      x: 506.51,
      y: 175.92,
      width: 367.7,
      height: 283.28,
    },
    {
      type: "image",
      slide: "slide4",
      path: `./src/common/Anúncios_mais_exibidos_3.png`,
      x: 84.98,
      y: 175.92,
      width: 367.7,
      height: 283.28,
    },
    {
      type: "image",
      slide: "slide4",
      path: `./src/common/Anúncios_mais_exibidos_4.png`,
      x: 506.51,
      y: 175.92,
      width: 367.7,
      height: 283.28,
    },
    {
      type: "image",
      slide: "slide5",
      path: `./src/common/Anúncios_mais_exibidos_5.png`,
      x: 84.98,
      y: 175.92,
      width: 367.7,
      height: 283.28,
    },
    {
      type: "image",
      slide: "slide5",
      path: `./src/common/Anúncios_mais_exibidos_6.png`,
      x: 506.51,
      y: 175.92,
      width: 367.7,
      height: 283.28,
    },
    {
      type: "image",
      slide: "slide6",
      path: `./src/common/Pagina Destino.png`,
      x: 206.51,
      y: 63.17,
      width: 622.37,
      height: 416.71,
    },
    {
      type: "image",
      slide: "slide7",
      path: `./src/common/Dispositivos.png`,
      x: 84.98,
      y: 175.92,
      width: 367.7,
      height: 283.28,
    },
    {
      type: "image",
      slide: "slide7",
      path: `./src/common/Informações_demográficas.png`,
      x: 506.51,
      y: 175.92,
      width: 367.7,
      height: 283.28,
    },
  ];
  execute(req, res) {
    if (!req.query.year || !req.query.month) {
      this._firstPageTitle = `${
        req.query.report_type
      } - ${dateHelper.getMonthName(this._date.getMonth() - 1)} ${this._year}`;

      this._generalTitle = `${req.query.report_type} | ${dateHelper
        .getMonthName(this._date.getMonth() - 1)
        .toUpperCase()} ${this._year}`;
    } else {
      this._firstPageTitle = `${
        req.query.report_type
      } - ${dateHelper.getMonthName(req.query.month - 1)} ${req.query.year}`;

      this._generalTitle = `${req.query.report_type} | ${dateHelper
        .getMonthName(req.query.month - 1)
        .toUpperCase()} ${req.query.year}`;
    }

    this._reportInfo.unshift({
      type: "text",
      slide: "slide1",
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
    });
    this._reportInfo.unshift({
      type: "text",
      multiSlide: true,
      slideStart: 2,
      slideEnd: 10,
      value: this._generalTitle,
      x: 660,
      y: 12.74,
      // textAlign: "center",
      textWrap: "none",
      fontSize: 14,
      fontFace: "Montserrat",
      textColor: "a0d911",
      fontBold: true,
    });

    return res.status(200).json(this._reportInfo);
  }

  getInfo() {
    return this._reportInfo;
  }
}

module.exports = new DefaultInfo();
