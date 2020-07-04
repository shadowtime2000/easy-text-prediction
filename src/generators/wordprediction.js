const fs = require("fs");

class WordPrediction {
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
    this.nextWord = JSON.parse(fs.readFileSync(file));
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

  generateText(data, words) {
    var splitData = data.split(" ");
    var newWords = [];
    var lastWord = splitData[splitData.length - 1];

    for (var i = 0; i < words; i++) {
      newWords.push(this.predict(lastWord));
      lastWord = newWords[newWords.length - 1];
    }

    return newWords.join(" ");
  }
}

module.exports = WordPrediction;
