(function(window, angular, undefined) {
    'use strict';

    angular
        .module('angular-leaflet')
        .directive('maxzoom', Directive);

    function Directive() {
        var directive = {
            restrict: 'A',
            scope: false,
            replace: false,
            link: link
        };

        function link(scope, element, attrs, controller) {
            console.log('maxzoom');
        }

        return directive;
    }
})(window, window.angular);
