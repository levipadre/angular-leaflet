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
            require: 'angularLeaflet',
            link: link
        };

        function link(scope, element, attrs, controller) {
            var lScope  = controller.getLScope(),
                tiles = lScope.tiles;

            lScope.$watch("tiles", function (tiles) {
                var tileLayerUrl = tiles.url;

                if(tiles.options){
                    var tileOptions = tiles.options;
                }

                L.tileLayer(tileLayerUrl, tileOptions).addTo(lScope.map);
            }, true);
        }

        return directive;
    }
})(window, window.angular);
