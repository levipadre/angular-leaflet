(function(window, angular, undefined) {
    'use strict';

    angular
        .module('angular-leaflet')
        .directive('tiles', Directive);

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
                tiles = lScope.tiles;

            controller.getMap().then(function (map) {
                var defaultMap = Default.getDefaultMap(attrs.id);

                lScope.$watch("tiles", function (tiles) {
                    var tilesUrl = tiles.url;

                    if(tiles.options){
                        var tilesOptions = tiles.options;
                    }

                    var tile = L.tileLayer(tilesUrl, tilesOptions);
                    tile.addTo(map);
                }, true);
            });
        }

        return directive;
    }
})(window, window.angular);
