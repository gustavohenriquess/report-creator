const fs = require("fs");

async function rename(basePath) {
  const files = fs.readdirSync(`${basePath}`);
  console.log(files, "files");
  let filesName = [];

  for (const file of files) {
    var name = "";
    if (file.includes("(")) name = file.split("(")[0] + ".png";
    else name = file;
    name = name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    filesName.push(name);
    fs.renameSync(`${basePath}/${file}`, `${basePath}/${name}`);
  }

  return filesName;
}

module.exports = rename;
