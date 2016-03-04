(function(window, angular, undefined) {
    'use strict';

    angular
        .module('app')
        .controller('AppCtrl', Ctrl);

    Ctrl.$inject = ['$scope'];

    function Ctrl($scope) {
        var callInit = function(){
        }

        callInit();
    }
})(window, window.angular);