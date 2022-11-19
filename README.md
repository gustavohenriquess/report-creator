# Report Creator

create a google adwords report for my wife's company's clients.

the system takes the images from a common folder inside source and assembles the necessary slides and texts.

## Libs used

- [nodejs-pptx](https://www.npmjs.com/package/nodejs-pptx)

## Corrections used

file: /node_modules/nodejs-pptx/lib/factories/index.js:42

```
- if (zip.files.hasOwnProperty(key)) {
+ if (Object.prototype.hasOwnProperty.call(zip.files, key)) {
```

[link](https://github.com/heavysixer/node-pptx/issues/83)
