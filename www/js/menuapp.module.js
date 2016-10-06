(
  function () {
    'use strict';
    angular.module('MenuApp', ['ngMaterial', 'ui.router'])
      .config(function ($mdThemingProvider, $mdIconProvider) {
        $mdThemingProvider.theme('mytheme').primaryPalette('deep-orange').accentPalette(
          'blue');
      });
  }
)();
