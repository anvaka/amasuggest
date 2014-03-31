require('typeahead.an');
require('an').directive(amazonSearch);

var fs = require('fs');
var flatten = require('./flatten');

function amazonSearch($http) {
  return {
    restrict:'EA',
    scope:{
      src:'=',
    },
    replace:true,
    template: fs.readFileSync(__dirname + '/index.html', 'utf8'),
    link: function (scope, element, attrs) {
      scope.getProduct = function (val) {
        return $http.get(attrs.src || 'http://amasearch.herokuapp.com/', {
          params: { keywords:val }
        }).then(function (res) {
          if (res.data) return res.data.map(flatten);
        });
      };
    }
  };
}
