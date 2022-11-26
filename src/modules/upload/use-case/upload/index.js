const path = require("path");
const multer = require("multer");
const renameFile = require("../../utils/rename-files");

class UploadImage {
  execute(request, response) {
    renameFile(process.env.COMMON_PATH);
    return response.status(200).json({ message: "ok - files uploaded" });
  }

  configMulter() {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        const dir = path.resolve(__dirname, "../../../../common");
        cb(null, dir);
      },
      filename: function (req, file, cb) {
        cb(null, Buffer.from(file.originalname, "latin1").toString("utf8"));
      },
    });

    return multer({ storage: storage });
  }
}

module.exports = new UploadImage();
