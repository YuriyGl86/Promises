// TODO: write your code here

import read from './reader';
import json from './parser';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static load() {
    // const data = read(); // возвращается Promise!
    // const value = json(data); // возвращается Promise!
    return read()
      .then((data) => json(data))
      .then((jsonString) => JSON.parse(jsonString))
      .then((jsonData) => new GameSaving(jsonData));
  }
}
