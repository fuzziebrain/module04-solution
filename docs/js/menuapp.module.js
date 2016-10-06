(
  function () {
    'use strict';
    angular.module('MenuApp', ['ngMaterial'])
      .config(function ($mdThemingProvider, $mdIconProvider) {
        $mdThemingProvider.theme('mytheme').primaryPalette('deep-orange').accentPalette(
          'cyan');
      });
  }
)();
