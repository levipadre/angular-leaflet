(function(window, angular, undefined) {
    'use strict';

    angular
        .module('angular-leaflet')
        .directive('markers', Directive);

    function Directive() {
        var directive = {
            restrict: 'A',
            scope: false,
            replace: false,
            require: 'angularLeaflet',
            link: link
        };

        function link(scope, element, attrs, controller) {
            var lScope  = controller.getLScope(),
                markers = lScope.markers;

            lScope.$watch("markers", function (markers) {
                var markersCoords = [markers.lat, markers.lng];

                if(markers.options){
                    var markersOptions = markers.options;
                }

                var marker = new L.marker(markersCoords, markersOptions);
                marker.addTo(lScope.map);
            }, true);
        }

        return directive;
    }
})(window, window.angular);
