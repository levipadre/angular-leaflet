(function(window, angular, undefined) {
    'use strict';

    angular
        .module('app')
        .controller('AppCtrl', Ctrl);

    Ctrl.$inject = ['$scope'];

    function Ctrl($scope) {
        $scope.exampleCenter = L.latLng(50.5, 30.5);
        $scope.exampleZoom = 6;

        var callInit = function(){

        }

        callInit();
    }
})(window, window.angular);