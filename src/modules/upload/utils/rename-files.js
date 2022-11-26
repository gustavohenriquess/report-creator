const fs = require("fs");

async function rename(basePath) {
  fs.readdir(`${basePath}`, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      if (!file.includes("(")) continue;
      const newName = file.split("(")[0] + ".png";
      fs.rename(`${basePath}${file}`, `${basePath}${newName}`, (err) => {
        if (err) throw err;
      });
    }
  });
}

module.exports = rename;
