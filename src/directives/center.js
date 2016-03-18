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
                center = lScope.center;

            controller.getLMap().then(function (map) {
                var defaultMap = Default.getDefaultMap(attrs.id);

                lScope.$watch("center", function (center) {
                    var centerCoords = [defaultMap.center['lat'], defaultMap.center['lng']];
                    var centerZoom = defaultMap.center['zoom'];

                    if(typeof center != "undefined"){
                        centerZoom = angular.copy(center.zoom);
                        centerCoords = angular.copy([center.lat, center.lng]);
                    }

                    map.setView(centerCoords, centerZoom);

                }, true);
            });
        }

        return directive;
    }
})(window, window.angular);
