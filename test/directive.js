var test = require('tape').test;
var an =  require('an');
var autoSuggest = require('../index.js');

test('It creates diretive', function (t) {
  var dir = document.getElementById('myDirective');
  var module = an.flush();
  angular.bootstrap(dir, [module.name]);
  setTimeout(function() { 
    var compiled = document.getElementById('myDirective');
    var hint = compiled.querySelectorAll('input')[0].attributes.placeholder.value;
    t.equals(hint, 'What do you like to read?', 'It has correct placeholder');
    t.end();
  }, 10);
});
