angular.module("simpleSearchApp")
  .controller("HeaderCtrl", ["$scope", "$location", "searchData", function ($scope, $location, searchData) {
    $scope.isNavCollapsed = true;

    $scope.dataSearch = function (searchKey) {
      if (searchKey) {
        searchData.searchKey = searchKey;

        var path = '/results/' + searchKey;
        $location.path(path);
      }
    }
  }]);
