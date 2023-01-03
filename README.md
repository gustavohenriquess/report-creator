# Report Creator

Create reports automatically, passing texts and images.

the system receives the images and saves them in a folder. When saving the images, the system normalizes the name of the image, removing accents and in lower case.

After creating the slide, it sends the report by e-mail and deletes all images saved in the system.

---

<br />

## Routes

[insomnia](./docs/Insomnia.json)

- GET [REPORT INFO](./docs/report-info.md)
- POST [UPLOAD IMAGES](./docs/upload-images.md)
- POST [REPORT CREATE](./docs/report-create.md)

<br />

## Utils

- [normalize](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
- [Buffer.from()](https://www.w3schools.com/nodejs/met_buffer_from.asp)

<br />

## Versions

![badge](https://img.shields.io/badge/nodeJS-18.12.1-blue?logo=nodedotjs)
![badge](https://img.shields.io/badge/yarn-1.22.19-blue?logo=yarn)

### Libs used

![badge](https://img.shields.io/badge/express-4.18.2-blue?logo=express) ![badge](https://img.shields.io/badge/cors-2.8.5-blue) ![badge](https://img.shields.io/badge/dotenv--flow-3.2.0-blue?logo=dotenv) ![badge](https://img.shields.io/badge/nodejs--pptx-1.0.1-blue) ![badge](https://img.shields.io/badge/nodemailer-6.8.0-blue?logo=gmail) ![badge](https://img.shields.io/badge/multer-1.4.5--lts.1-blue)
<br />

- [express](https://www.npmjs.com/package/express)
- [cors](https://www.npmjs.com/package/cors)
- [dontenv-flow](https://www.npmjs.com/package/dotenv-flow)
- [nodejs-pptx](https://www.npmjs.com/package/nodejs-pptx)
- [nodemailer](https://nodemailer.com/)
- [multer](https://www.npmjs.com/package/multer)

## Corrections used

<br />

### Nodejs-pptx

file: /node_modules/nodejs-pptx/lib/factories/index.js:42

```
- if (zip.files.hasOwnProperty(key)) {
+ if (Object.prototype.hasOwnProperty.call(zip.files, key)) {
```

- [Issue](https://github.com/heavysixer/node-pptx/issues/83)
- [Pr](https://github.com/heavysixer/node-pptx/pull/91)

<br />

### Multer

```
  Buffer.from(file.originalname, "latin1").toString("utf8")
```

- [Issue](https://github.com/expressjs/multer/issues/836#issuecomment-1264338996)
