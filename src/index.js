const PPTX = require("nodejs-pptx");
const dateHelper = require("./utils/date.js");

const date = new Date();
const year = date.getFullYear();
const pptxPath = `./src/template.pptx`;

const firstPageTitle = `Google Adwords - ${dateHelper.getMonthName(
  date.getMonth()
)} ${year}`;

const generalTitle = `GOOGLE ADWORDS | ${dateHelper
  .getMonthName(date.getMonth())
  .toUpperCase()} ${year}`;

console.log(`${firstPageTitle}\n${generalTitle}`);

async function addImage(filePath, slide, imagePath, x, y, width, height) {
  try {
    let pptx = new PPTX.Composer();
    await pptx.load(filePath);
    await pptx.compose(async (pres) => {
      await pres.getSlide(slide).addImage((image) => {
        image.file(imagePath).x(x).y(y).cx(width).cy(height);
      });
    });

    await pptx.save(filePath);
  } catch (error) {
    console.log(error);
  }
}
async function addText(filePath, slide) {
  let pptx = new PPTX.Composer();
  await pptx.load(filePath);

  await pptx.compose(async (pres) => {
    console.log("addText");
    await pres.getSlide(slide).reaper();
  });

  await pptx.save(`./text-box-new-simple.pptx`);
}

async function Execute() {
  // for (var i = 2; i <= 10; i++) {}

  await addText(pptxPath, "slide2");

  await addImage(
    pptxPath,
    "slide2",
    `./src/common/serie_temporal.png`,
    68.55,
    156.37,
    821.81,
    271.96
  );

  await addImage(
    pptxPath,
    "slide3",
    `./src/common/Anúncios.png`,
    84.98,
    175.92,
    367.7,
    283.28
  );

  await addImage(
    pptxPath,
    "slide3",
    `./src/common/Anúncios_mais_exibidos_2.png`,
    506.51,
    175.92,
    367.7,
    283.28
  );

  await addImage(
    pptxPath,
    "slide4",
    `./src/common/Anúncios_mais_exibidos_3.png`,
    84.98,
    175.92,
    367.7,
    283.28
  );

  await addImage(
    pptxPath,
    "slide4",
    `./src/common/Anúncios_mais_exibidos_4.png`,
    506.51,
    175.92,
    367.7,
    283.28
  );

  await addImage(
    pptxPath,
    "slide5",
    `./src/common/Anúncios_mais_exibidos_5.png`,
    84.98,
    175.92,
    367.7,
    283.28
  );

  await addImage(
    pptxPath,
    "slide5",
    `./src/common/Anúncios_mais_exibidos_6.png`,
    506.51,
    175.92,
    367.7,
    283.28
  );

  await addImage(
    pptxPath,
    "slide6",
    `./src/common/Pagina Destino.png`,
    206.51,
    63.17,
    622.37,
    416.71
  );

  await addImage(
    pptxPath,
    "slide7",
    `./src/common/Dispositivos.png`,
    84.98,
    175.92,
    367.7,
    283.28
  );

  await addImage(
    pptxPath,
    "slide7",
    `./src/common/Informações_demográficas.png`,
    506.51,
    175.92,
    367.7,
    283.28
  );
}

Execute();
