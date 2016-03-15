(function(window, angular, undefined) {
    'use strict';

    angular
        .module('angular-leaflet', [])
        .directive('center', Directive);

    function Directive() {
        var directive = {
            restrict: 'A',
            scope: false,
            replace: false,
            require: 'angularLeaflet',
            link: link
        };

        function link(scope, element, attrs, controller) {

        }

        return directive;
    }
})(window, window.angular);
