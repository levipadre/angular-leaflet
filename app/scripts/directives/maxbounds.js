(function(angular) {
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
            console.log(333);
            console.log(scope);
        }

        return directive;
    }
})(window.angular);
