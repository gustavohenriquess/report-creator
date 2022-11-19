require("dotenv").config();
const PPTX = require("nodejs-pptx");
const dateHelper = require("./utils/date.js");
const mailer = require("./utils/send_email.js");

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

async function execute() {
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

  await addImage(
    reportPath,
    reportPath,
    "slide2",
    `./src/common/serie_temporal.png`,
    68.55,
    156.37,
    821.81,
    271.96
  );

  await addImage(
    reportPath,
    reportPath,
    "slide3",
    `./src/common/Anúncios.png`,
    84.98,
    175.92,
    367.7,
    283.28
  );

  await addImage(
    reportPath,
    reportPath,
    "slide3",
    `./src/common/Anúncios_mais_exibidos_2.png`,
    506.51,
    175.92,
    367.7,
    283.28
  );

  await addImage(
    reportPath,
    reportPath,
    "slide4",
    `./src/common/Anúncios_mais_exibidos_3.png`,
    84.98,
    175.92,
    367.7,
    283.28
  );

  await addImage(
    reportPath,
    reportPath,
    "slide4",
    `./src/common/Anúncios_mais_exibidos_4.png`,
    506.51,
    175.92,
    367.7,
    283.28
  );

  await addImage(
    reportPath,
    reportPath,
    "slide5",
    `./src/common/Anúncios_mais_exibidos_5.png`,
    84.98,
    175.92,
    367.7,
    283.28
  );

  await addImage(
    reportPath,
    reportPath,
    "slide5",
    `./src/common/Anúncios_mais_exibidos_6.png`,
    506.51,
    175.92,
    367.7,
    283.28
  );

  await addImage(
    reportPath,
    reportPath,
    "slide6",
    `./src/common/Pagina Destino.png`,
    206.51,
    63.17,
    622.37,
    416.71
  );

  await addImage(
    reportPath,
    reportPath,
    "slide7",
    `./src/common/Dispositivos.png`,
    84.98,
    175.92,
    367.7,
    283.28
  );

  await addImage(
    reportPath,
    reportPath,
    "slide7",
    `./src/common/Informações_demográficas.png`,
    506.51,
    175.92,
    367.7,
    283.28
  );

  await mailer(reportPath);
}

execute();
