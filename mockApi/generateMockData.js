/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import faker from 'faker';

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

jsf.format('pastDate', () => faker.date.between("2018-01-01", "2018-06-31"));
jsf.format('pickone', () => ["times", "min", "seg"][getRandomArbitrary(0, 3)]);
const json = JSON.stringify(jsf(schema));
fs.writeFile("./mockApi/db.json", json, function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log("Mock data generated...");
  }
});
