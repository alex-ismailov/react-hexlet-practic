## My React Notes

#### Jest snapshot tests with enzyme

Если expect(mount(<BtnGroup />).wrapper.render()) вместо html структуры возвращает js объект:

```
  + initialize {
  +   "0": Object {
  +     "attribs": Object {
  +       "class": "btn-group",
  +       "role": "group",
  +       ...
  +       ...
```

то чтобы этого избежать необходимо установить пакет [enzyme-to-json](https://www.npmjs.com/package/enzyme-to-json):

` npm install --save-dev enzyme-to-json `

в package.json необходимо добавить

 "jest": {
    "snapshotSerializers": ["enzyme-to-json/serializer"]
  },

***
