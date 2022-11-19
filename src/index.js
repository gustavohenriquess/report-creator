require("dotenv").config();
const PPTX = require("nodejs-pptx");
const dateHelper = require("./utils/date.js");
const mailer = require("./utils/send_email.js");
const renameFiles = require("./utils/rename-files.js");

const date = new Date();
const year = date.getFullYear();
const templatePath = `./src/template.pptx`;
const reportPath = `./src/${dateHelper.getMonthName(
  date.getMonth()
)}-${year}.pptx`;

const firstPageTitle = `Google Adwords - ${dateHelper.getMonthName(
  date.getMonth()
)} ${year}`;

const generalTitle = `GOOGLE ADWORDS | ${dateHelper
  .getMonthName(date.getMonth())
  .toUpperCase()} ${year}`;

async function addImage(
  filePath,
  reportPath,
  slide,
  imagePath,
  x,
  y,
  width,
  height
) {
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

async function addText(filePath, reportPath, slide, config) {
  let pptx = new PPTX.Composer();
  await pptx.load(filePath);

  await pptx.compose(async (pres) => {
    await pres.getSlide(slide).addText(config);
  });

  await pptx.save(reportPath);
}

const imagesData = [
  {
    slide: "slide2",
    path: `./src/common/Série_temporal.png`,
    x: 68.55,
    y: 156.37,
    width: 821.81,
    height: 271.96,
  },
  {
    slide: "slide3",
    path: `./src/common/Anúncios.png`,
    x: 84.98,
    y: 175.92,
    width: 367.7,
    height: 283.28,
  },
  {
    slide: "slide3",
    path: `./src/common/Anúncios_mais_exibidos_2.png`,
    x: 506.51,
    y: 175.92,
    width: 367.7,
    height: 283.28,
  },
  {
    slide: "slide4",
    path: `./src/common/Anúncios_mais_exibidos_3.png`,
    x: 84.98,
    y: 175.92,
    width: 367.7,
    height: 283.28,
  },
  {
    slide: "slide4",
    path: `./src/common/Anúncios_mais_exibidos_4.png`,
    x: 506.51,
    y: 175.92,
    width: 367.7,
    height: 283.28,
  },
  {
    slide: "slide5",
    path: `./src/common/Anúncios_mais_exibidos_5.png`,
    x: 84.98,
    y: 175.92,
    width: 367.7,
    height: 283.28,
  },
  {
    slide: "slide5",
    path: `./src/common/Anúncios_mais_exibidos_6.png`,
    x: 506.51,
    y: 175.92,
    width: 367.7,
    height: 283.28,
  },
  {
    slide: "slide6",
    path: `./src/common/Pagina Destino.png`,
    x: 206.51,
    y: 63.17,
    width: 622.37,
    height: 416.71,
  },
  {
    slide: "slide7",
    path: `./src/common/Dispositivos.png`,
    x: 84.98,
    y: 175.92,
    width: 367.7,
    height: 283.28,
  },
  {
    slide: "slide7",
    path: `./src/common/Informações_demográficas.png`,
    x: 506.51,
    y: 175.92,
    width: 367.7,
    height: 283.28,
  },
];

async function execute() {
  renameFiles("./src/common/");

  await addText(templatePath, reportPath, "slide1", {
    value: firstPageTitle,
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

  for (var i = 2; i <= 10; i++) {
    await addText(reportPath, reportPath, "slide" + i, {
      value: generalTitle,
      x: 660,
      y: 12.74,
      // textAlign: "center",
      textWrap: "none",
      fontSize: 14,
      fontFace: "Montserrat",
      textColor: "a0d911",
      fontBold: true,
    });
  }

  for (var j in imagesData) {
    await addImage(
      reportPath,
      reportPath,
      imagesData[j].slide,
      imagesData[j].path,
      imagesData[j].x,
      imagesData[j].y,
      imagesData[j].width,
      imagesData[j].height
    );
  }

  await mailer(reportPath);
}

execute();
