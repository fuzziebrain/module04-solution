(
  function () {
    'use strict';

    angular.module('data')
      .constant('dataUrl', 'https://davids-restaurant.herokuapp.com/')
      .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http', '$q', 'dataUrl'];

    function MenuDataService($http, $q, dataUrl) {
      var service = this;

      service.getAllCategories = function () {
        var deferred = $q.defer();

        $http({
          method: 'GET',
          url: (dataUrl + 'categories.json')
        }).then(function (result) {
          deferred.resolve(result.data);
        });

        return deferred.promise;
      };

      service.getItemsForCategory = function (categoryShortName) {
        var deferred = $q.defer();

        $http({
          method: 'GET',
          url: (dataUrl + 'menu_items.json'),
          params: {
            "category": categoryShortName
          }
        }).then(function (result) {
          deferred.resolve(result.data.menu_items);
        });

        return deferred.promise;
      };
    }
  }
)();
