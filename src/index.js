const fs = require("fs");

class TextPredictionTool {
  constructor() {
    this.nextWord = {};
  }

  train(data, weight) {
    var words = data.split(" ");

    for (var word in words) {
      if (!this.nextWord[words[word]]) {
        this.nextWord[words[word]] = [];
      }
    }

    for (var i = 0; i < weight; i++) {
      for (var word in words) {
        if (words[word - 1]) {
          this.nextWord[words[word - 1]].push(words[word]);
        }
      }
    }
  }

  loadFromFile(file) {
    this.nextWord = require(file);
  }

  saveToFile(file) {
    const data = JSON.stringify(this.nextWord);
    fs.writeFile(file, data, (err) => {if (err) {throw err}});
  }

  predict(data) {
    var words = data.split(" ");
    var lastWord = words[words.length - 1];

    return this.nextWord[lastWord][Math.floor(Math.random()*this.nextWord[lastWord].length)];
  }
}

module.exports = TextPredictionTool;
