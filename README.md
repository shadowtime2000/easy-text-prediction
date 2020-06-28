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
const TextPredictionTool = require("easy-text-prediction");

var textPredictionTool = new TextPredictionTool();

textPredictionTool.train("Everyone is evil", 1);
textPredictionTool.train("Everyone is good", 9);

textPredictionTool.predict("is"); // 10% chance -> evil, 90% chance -> good

textPredictionTool.saveToFile("textPredictionTool.json"); // Save to file

textPredictionTool.loadFromFile("textPredictionTool.json"); // Load from file
```
Warning! Your code will not work without specifying a weight.

## TODO
- [ ] Have text prediction tool remember all text up to that word
