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
            console.log('tiles');
            var tileLayerObj;
            var leafletScope  = controller.getLeafletScope(),
                tiles = leafletScope.tiles;

            console.log(leafletScope);

            //L.tileLayer(scope.tiles.url).addTo(map);
            //if (tiles.url) {
            //    tileLayerObj.setUrl(tiles.url);
            //}
        }

        return directive;
    }
})(window, window.angular);
