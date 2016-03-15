(function(window, angular, undefined) {
    'use strict';

    angular
        .module('angular-leaflet')
        .directive('angularLeaflet', Directive);

    function Directive() {
        var directive = {
            restrict: 'EA',
            replace: true,
            transclude: true,
            scope: {
                tiles: '=?',
                center: '=?',
                markers: '=?',
                zoom: '=?',
                minzoom: '=?',
                maxzoom: '=?',
                maxbounds: '=?'
            },
            template: '<div class="angular-leaflet"><div data-ng-transclude></div></div>',
            controller: ["$scope", function controller($scope) {
                this.getLScope = function () {
                    return $scope;
                };
            }],
            link: link
        };

        function link(scope, element, attrs, ctrl) {
            var mapID = attrs.id || 'mapId';

            console.log('scope');
            console.log(scope);

            console.log('attrs');
            console.log(attrs);


            scope.map = L.map(mapID, {
                center: scope.center,
                zoom: scope.zoom,
                minZoom: scope.minzoom,
                maxZoom: scope.maxzoom
            });
            return map;
        }

        return directive;
    }
})(window, window.angular);
