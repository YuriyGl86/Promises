// TODO: write your code here

import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    // const data = read(); // возвращается Promise!
    // const value = json(data); // возвращается Promise!
    return read()
      .then((data) => json(data))
      .then((jsonString) => JSON.parse(jsonString));
  }
}
