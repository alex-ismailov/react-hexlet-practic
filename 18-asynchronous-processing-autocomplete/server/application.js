import Express from 'express';
import fs from 'fs';

export default () => {
  const app = new Express();

  const filePath = '/home/smile/code/react-hexlet-practic/17-asynchronous-processing-autocomplete/server/countries.json'; 
  const countries = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  /* switch off CORS policy */
  /* https://qastack.ru/programming/23751914/how-can-i-set-response-header-on-express-js-assets */
  app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  /* **** */

  app.get('/countries', (req, res) => {
    const term = req.query.term;
    const filteredСountries = countries
      .filter(({ name }) => name.toLowerCase().includes(term.toLowerCase()))
      .map(({ name }) => name);

    res.json(filteredСountries);
  });

  return app;
};

// {
//   "id": 1,
//   "name": "Afghanistan",
//   "iso3": "AFG",
//   "iso2": "AF",
//   "phone_code": "93",
//   "capital": "Kabul",
//   "currency": "AFN",
//   "native": "افغانستان",
//   "emoji": "🇦🇫",
//   "emojiU": "U+1F1E6 U+1F1EB"
// },