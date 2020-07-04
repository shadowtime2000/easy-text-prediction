# easy-text-prediction
An easy text prediction package that doesn't use a complicated neural network.

## Installation
You can install this package from npm with:
```
npm install easy-text-prediction
```

## Usage
You can use this package like this:
```javascript
const EasyTextPrediction = require("easy-text-prediction");

var textPredictionTool = new EasyTextPrediction.WordPrediction();

textPredictionTool.train("Everyone is evil", 1);
textPredictionTool.train("Everyone is good", 9);

textPredictionTool.predict("is"); // 10% chance -> evil, 90% chance -> good

textPredictionTool.saveToFile("textPredictionTool.json"); // Save to file

textPredictionTool.loadFromFile("textPredictionTool.json"); // Load from file

textPredictionTool.generate("is", 50); // Generate 50 words that could follow that word. Warning! An error will occur if you do not have sufficient training data.
```
Warning! Your code will not work without specifying a weight.

There are two types of prediction tools:
* Word Prediction predicts by words
* Char Prediction predicts by characters

You can easily swap prediction tools by changing it from ```var textPredictionTool = new EasyTextPrediction.WordPrediction();``` to ```var textPredictionTool = new EasyTextPrediction.CharPrediction();```

## TODO
- [ ] Have text prediction tool remember all text up to that word
