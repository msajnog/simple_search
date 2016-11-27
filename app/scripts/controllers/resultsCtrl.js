angular.module("simpleSearchApp")
  .controller("ResultsCtrl", ["$scope", "$location", "searchData", "searchService", function ($scope, $location, searchData, searchService) {
    $scope.isNavCollapsed = true;
    $scope.articles = {};

    var search = function(searchKey) {
      if (!searchKey) {
        $location.path('/');
        return false;
      }

      searchService.getResults(searchKey)
        .then(function(response) {
          $scope.articles = response.data.query.pages;
        });
    }

    search(searchData.searchKey);
  }]);
