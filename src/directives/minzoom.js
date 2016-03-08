(function(angular) {
    'use strict';

    angular
        .module('angular-leaflet')
        .directive('minzoom', Directive);

    function Directive() {
        var directive = {
            restrict: 'A',
            scope: false,
            replace: false,
            //require: ['leaflet'],
            link: link
        };

        function link(scope, element, attrs, controller) {
            console.log('minzoom');
        }

        return directive;
    }
})(window.angular);
