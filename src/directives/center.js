(function(window, angular, undefined) {
    'use strict';

    angular
        .module('angular-leaflet', [])
        .directive('center', Directive);

    Directive.$inject = ['Default'];

    function Directive(Default) {
        var directive = {
            restrict: 'A',
            scope: false,
            replace: false,
            require: 'angularLeaflet',
            link: link
        };

        function link(scope, element, attrs, controller) {
            var lScope  = controller.getLScope(),
                center = lScope.center,
                zoom = lScope.zoom;

            controller.getLMap().then(function (map) {
                var defaultMap = Default.getDefaultMap(attrs.id);

                lScope.$watch("center", function (center) {
                    map.setView([center.lat, center.lng], zoom);
                }, true);
            });
        }

        return directive;
    }
})(window, window.angular);
