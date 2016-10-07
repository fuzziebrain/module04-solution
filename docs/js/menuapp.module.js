(
  function () {
    'use strict';
    angular.module('MenuApp', ['ngMaterial', 'ui.router', 'data'])
      .config(function ($mdThemingProvider, $mdIconProvider) {
        $mdThemingProvider.theme('mytheme').primaryPalette('deep-orange').accentPalette(
          'blue');
      });
  }
)();
