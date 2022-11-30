const fs = require("fs");

async function rename(basePath) {
  const files = fs.readdirSync(`${basePath}`);
  let filesName = [];

  for (const file of files) {
    var name = "";
    if (file.includes("(")) name = file.split("(")[0] + ".png";
    else name = file;
    name = name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    fs.renameSync(`${basePath}/${file}`, `${basePath}/${name}`);
    filesName.push(name);
  }

  return filesName;
}

module.exports = rename;
