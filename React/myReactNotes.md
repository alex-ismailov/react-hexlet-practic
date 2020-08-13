## My React Notes


#### Checking react-app against the Airbnb JavaScript style guide.

First thing create an `.env` file in your project (if haven’t already.).

In this `.env` file put the following line:

`EXTEND_ESLINT=true`

Install the `Airbnb` style guide into our project. 

`npm install eslint-config-airbnb -D`

open the `package.json` and add `airbnb` to the extends option:

```
{
  ...
  "eslintConfig": {
      "extends": ["react-app", "airbnb"]
  }
   ...
}
```

we can check react-app code by running:

`npx eslint filepath`

or fix by running:

`npx eslint --fix filepath`

And that’s it!

src: [Extending Create React App's ESLint config](https://gaya.pizza/articles/extending-cra-eslint-airbnb/)

***


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


#### Express post data setting

Для того чтобы в Express вопользоваться req.body, т.е. данныими которые пришли в POST запросе
необходимо добавить след. midellware:

```
app.use(Express.json()) // for parsing application/json
```

[link to src](https://qastack.ru/programming/23751914/how-can-i-set-response-header-on-express-js-assets)

***
