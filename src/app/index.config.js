(function () {
  'use strict';

  angular
    .module('newWeb')
    .factory('timestampMarker', [function () {
      var timestampMarker = {
        request: function (config) {
          config.requestTimestamp = new Date().getTime();
          return config;
        },
        response: function (response) {
          response.config.responseTimestamp = new Date().getTime();
          return response;
        }
      };
      return timestampMarker;
    }])
    .config(function (RestangularProvider) {
      //set the base url for api calls on our RESTful services
      var newBaseUrl = "";
      if (window.location.hostname == "localhost") {
        newBaseUrl = "http://52.77.114.42:19010/";
      } else {
        // var deployedAt = window.location.href.substring(0, window.location.href);
        newBaseUrl = "http://52.74.161.149:19010/";
      }
      RestangularProvider.setBaseUrl(newBaseUrl);
      RestangularProvider.setDefaultHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    })

        .config(['$logProvider', function ($logProvider) {
          $logProvider.debugEnabled(true);
        }])

        .config(['$mdThemingProvider', function ($mdThemingProvider) {
          $mdThemingProvider.theme('default')
            .primaryPalette('cyan', {
              'default': '400'
            })
            .accentPalette('teal', {
              'default': '500'
            });


          $mdThemingProvider.theme('success');
          $mdThemingProvider.theme('failure');
          $mdThemingProvider.theme('warn');
          $mdThemingProvider.theme('info');


        }]);

      /* custom theme.

       $mdThemingProvider.definePalette('wittyparrotPalette', {
       '50': 'E0F7FA',
       '100': 'B2EBF2',
       '200': '80DEEA',
       '300': '4DD0E1',
       '400': '26C6DA',
       '500': '00BCD4',
       '600': '00ACC1',
       '700': '0097A7',
       '800': '00838F',
       '900': '006064',
       'A100': '80D8FF',
       'A200': '40C4FF',
       'A400': '00E5FF',
       'A700': '00B8D4',
       'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
       // on this palette should be dark or light
       'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
       '200', '300', '400', 'A100'],
       'contrastLightColors': undefined    // could also specify this if default was 'dark'
       });
       $mdThemingProvider.theme('default')
       .primaryPalette('wittyparrotPalette')

       */


    })();
