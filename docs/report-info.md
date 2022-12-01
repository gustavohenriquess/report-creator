# GET - /api/v1/**report**/**info**

## Query

> The 3 parameters need to be sent together but they are optional

- report_type: Google Adwords [STRING]
- month: 1-12 [NUMBER]
- year: 2022 [NUMBER]

## Response

> positionInfo: returns information to help assemble your slide
> reportInfo is an example of what can be sent to the report creation route

<br />

> 200 - OK

```
{
  "positionInfo": "x || y == 84.98 ==> 3cm",
  "reportInfo": [{
    "type": "text",
    "multiSlide": true,
    "slideStart": 2,
    "slideEnd": 10,
    "config": {
      "value": "Google Adwords | OUTUBRO 2022",
      "x": 660,
      "y": 12.74,
      "textWrap": "none",
      "fontSize": 14,
      "fontFace": "Montserrat",
      "textColor": "a0d911",
      "fontBold": true
    }
  }, {
    "type": "text",
    "slide": "slide1",
    "config": {
      "value": "Google Adwords - Outubro 2022",
      "x": 304.81,
      "y": 505.66,
      "cx": 305.94,
      "cy": 24.07,
      "textAlign": "center",
      "textWrap": "none",
      "fontSize": 14,
      "fontFace": "Montserrat",
      "textColor": "000000"
    }
  }, {
    "type": "image",
    "slide": "slide2",
    "path": "serie_temporal.png",
    "x": 68.55,
    "y": 156.37,
    "width": 821.81,
    "height": 271.96
  }, {
    "type": "image",
    "slide": "slide3",
    "path": "anuncios.png",
    "x": 84.98,
    "y": 175.92,
    "width": 367.7,
    "height": 283.28
  }, {
    "type": "image",
    "slide": "slide3",
    "path": "anuncios_mais_exibidos_2.png",
    "x": 506.51,
    "y": 175.92,
    "width": 367.7,
    "height": 283.28
  }, {
    "type": "image",
    "slide": "slide4",
    "path": "anuncios_mais_exibidos_3.png",
    "x": 84.98,
    "y": 175.92,
    "width": 367.7,
    "height": 283.28
  }, {
    "type": "image",
    "slide": "slide4",
    "path": "anuncios_mais_exibidos_4.png",
    "x": 506.51,
    "y": 175.92,
    "width": 367.7,
    "height": 283.28
  }, {
    "type": "image",
    "slide": "slide5",
    "path": "anuncios_mais_exibidos_5.png",
    "x": 84.98,
    "y": 175.92,
    "width": 367.7,
    "height": 283.28
  }, {
    "type": "image",
    "slide": "slide5",
    "path": "anuncios_mais_exibidos_6.png",
    "x": 506.51,
    "y": 175.92,
    "width": 367.7,
    "height": 283.28
  }, {
    "type": "image",
    "slide": "slide6",
    "path": "pagina destino.png",
    "x": 206.51,
    "y": 63.17,
    "width": 622.37,
    "height": 416.71
  }, {
    "type": "image",
    "slide": "slide7",
    "path": "dispositivos.png",
    "x": 84.98,
    "y": 175.92,
    "width": 367.7,
    "height": 283.28
  }, {
    "type": "image",
    "slide": "slide7",
    "path": "informacoes_demograficas.png",
    "x": 506.51,
    "y": 175.92,
    "width": 367.7,
    "height": 283.28
  }]
}
```
