(function(window, angular, undefined) {
    'use strict';

    angular
        .module('angular-leaflet')
        .directive('minzoom', Directive);

    function Directive() {
        var directive = {
            restrict: 'A',
            scope: false,
            replace: false,
            link: link
        };

        function link(scope, element, attrs, controller) {
            console.log('minzoom');
        }

        return directive;
    }
})(window, window.angular);
