require('typeahead.an');
require('an').directive(amazonSearch);

var fs = require('fs');

function amazonSearch($http) {
  return {
    restrict:'EA',
    scope:{
      src:'=',
      transform: '='
    },
    replace:true,
    template: fs.readFileSync(__dirname + '/index.html', 'utf8'),
    link: function (scope, element, attrs) {
      var flatten = require('./flatten')(scope.transform);
      scope.getProduct = function (val) {
        return $http.get(scope.src || 'http://amasearch.herokuapp.com/', {
          params: { keywords:val }
        }).then(function (res) {
          if (res.data) return res.data.map(flatten);
        });
      };
    }
  };
}
