(function(window, angular, undefined) {'use strict';

    angular
        .module('app', [
            'ngSanitize',
            'ngRoute',
            'angular-leaflet'
        ])
        .run(runBlock)
        .config(configure);

    angular.module('app.controllers', []);

    runBlock.$inject = ['$rootScope', '$routeParams'];
    configure.$inject = ['$routeProvider', '$locationProvider'];

    function runBlock($rootScope, $routeParams) {

    }

    function configure($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
            when('/', {
                templateUrl: '../app/scripts/templates/home.html'
            });
    }
})(window, window.angular);