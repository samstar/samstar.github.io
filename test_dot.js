var doT = require('doT');

var tempFn = doT.template("<h1>Here is a sample template {{=it.foo}}</h1>");
var resultText = tempFn({foo: 'haha'});
