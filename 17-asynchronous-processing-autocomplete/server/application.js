import Express from 'express';
import fs from 'fs';

export default () => {
  const app = new Express();

  const filePath = '/home/smile/code/react-hexlet-practic/17-asynchronous-processing-autocomplete/server/countries.json'; 
  const countries = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  app.get('/countries', (req, res) => {
    const term = req.query.term;
    const suitableСountries = countries
      .filter(({ name }) => name.toLowerCase().includes(term.toLowerCase()))
      .map(({ name }) => name);

    res.json(suitableСountries);
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