const fs = require("fs");

class CharPrediction {
  constructor() {
    this.nextChar = {};
  }

  train(data, weight) {
    var chars = data.split("");

    for (var char in chars) {
      if (!this.nextChar[chars[char]]) {
        this.nextChar[chars[char]] = [];
      }
    }

    for (var i = 0; i < weight; i++) {
      for (var char in chars) {
        if (chars[char - 1]) {
          this.nextChar[chars[char - 1]].push(chars[char]);
        }
      }
    }
  }

  loadFromFile(file) {
    this.nextChar = JSON.parse(fs.readFileSync(file));
  }

  saveToFile(file) {
    const data = JSON.stringify(this.nextWord);
    fs.writeFile(file, data, (err) => {if (err) {throw err}});
  }

  predict(data) {
    var chars = data.split("");
    var lastChar = chars[chars.length - 1];

    return this.nextChar[lastChar][Math.floor(Math.random()*this.nextChar[lastChar].length)];
  }

  generateText(data, words) {
    var splitData = data.split("");
    var newChars = [];
    var lastChar = splitData[splitData.length - 1];

    for (var i = 0; i < words; i++) {
      newChars.push(this.predict(lastChar));
      lastChar = newChars[lastChar.length - 1];
    }

    return newChars.join(" ");
  }
}

module.exports = CharPrediction;
