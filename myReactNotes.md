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


#### Switch off CORS policy

В Express необходимо добавить след. midellware:

```
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
```

[link to src](https://qastack.ru/programming/23751914/how-can-i-set-response-header-on-express-js-assets)

***
