angular
  .module("simpleSearchApp", [
    'ui.bootstrap',
    'ngAnimate',
    'ngRoute'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/results/:searchKey', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
