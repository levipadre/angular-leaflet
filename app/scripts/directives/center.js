(function(angular) {
    'use strict';

    angular
        .module('angular-leaflet', [])
        .directive('center', Directive);

    function Directive() {
        var directive = {
            restrict: 'A',
            scope: false,
            replace: false,
            link: link
        };

        function link(scope, element, attrs, controller) {
            console.log(111);
            console.log(scope);
        }

        return directive;
    }
})(window.angular);
