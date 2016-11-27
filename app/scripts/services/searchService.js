angular.module("simpleSearchApp")
.service("searchService", ["$http", "appConfig", function($http, appConfig) {

  this.getResults = function(searchKey) {
    if (searchKey) {
      var config = {
        params: {
            format: "json",
            action: "query",
            prop: "extracts",
            exchars: "140",
            exlimit: "10",
            exintro: "",
            explaintext: "",
            rawcontinue: "",
            generator: "search",
            gsrlimit: "10",
            callback: "JSON_CALLBACK"
        }
      };
      var url = 'https://en.wikipedia.org/w/api.php?';
      config.params.gsrsearch = searchKey;
      return $http.jsonp(url, config);
    }
  }
}])
