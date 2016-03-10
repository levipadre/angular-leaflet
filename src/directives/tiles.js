(function(window, angular, undefined) {
    'use strict';

    angular
        .module('angular-leaflet')
        .directive('tiles', Directive);

    function Directive() {
        var directive = {
            restrict: 'A',
            scope: false,
            replace: false,
            link: link
        };

        function link(scope, element, attrs, controller) {
            console.log('tiles');
        }

        return directive;
    }
})(window, window.angular);
