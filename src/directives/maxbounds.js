(function(window, angular, undefined) {
    'use strict';

    angular
        .module('angular-leaflet')
        .directive('maxbounds', Directive);

    function Directive() {
        var directive = {
            restrict: 'A',
            scope: false,
            replace: false,
            link: link
        };

        function link(scope, element, attrs, controller) {

        }

        return directive;
    }
})(window, window.angular);
