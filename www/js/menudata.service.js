(
  function () {
    'use strict';

    angular.module('MenuApp')
      .constant('dataUrl', 'https://davids-restaurant.herokuapp.com/')
      .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http', 'dataUrl'];

    function MenuDataService($http, dataUrl) {
      var service = this;

      service.getAllCategories = function () {
        return $http({
          method: 'GET',
          url: (dataUrl + 'categories.json')
        }).then(function (result) {
          return result.data;
        });
      };

      service.getItemsForCategory = function (categoryShortName) {
        return $http({
          method: 'GET',
          url: (dataUrl + 'menu_items.json'),
          params: { "category": categoryShortName }
        }).then(function (result) {
          return result.data.menu_items;
        });
      };
    }
  }
)();
