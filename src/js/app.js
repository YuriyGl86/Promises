// TODO: write your code here

import read from "./reader.js"
import json from "./parser.js"

export default class GameSavingLoader {
  static load() {
    // const data = read(); // возвращается Promise!
    // const value = json(data); // возвращается Promise!
    return read().
    then(data => json(data)).
    then(jsonString => JSON.parse(jsonString))
  }
}

GameSavingLoader.load().then(console.log)