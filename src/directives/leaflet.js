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
                center: '=?',
                zoom: '=?',
                minzoom: '=?',
                maxzoom: '=?',
                maxbounds: '=?',
                tiles: '=?'
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
            console.log('scope');
            console.log(scope);

            console.log('attrs');
            console.log(attrs);

            scope.map = L.map(attrs.id, {
                center: scope.center,
                zoom: scope.zoom,
                minZoom: scope.minzoom,
                maxZoom: scope.maxzoom
            });

            L.marker([50.5, 30.5]).addTo(scope.map);
        }

        return directive;
    }
})(window, window.angular);
