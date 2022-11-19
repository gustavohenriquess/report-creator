# Report Creator

create a google adwords report for my wife's company's clients.

the system takes the images from a common folder inside the source and assembles the necessary slides and texts and after saving it sends it by email.

## Libs used

- [nodejs-pptx](https://www.npmjs.com/package/nodejs-pptx)
- [nodemailer](https://nodemailer.com/)

## Corrections used

file: /node_modules/nodejs-pptx/lib/factories/index.js:42

```
- if (zip.files.hasOwnProperty(key)) {
+ if (Object.prototype.hasOwnProperty.call(zip.files, key)) {
```

[link](https://github.com/heavysixer/node-pptx/issues/83)
