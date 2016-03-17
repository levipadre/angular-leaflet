/*!
 *  angular-leaflet 1.0.0
 *  git: https://github.com/levipadre/angular-leaflet
 */

(function(window, angular, undefined) {
    'use strict';

    angular
        .module('angular-leaflet')
        .directive('angularLeaflet', Directive);

    Directive.$inject = ['$q', 'Default'];

    function Directive($q, Default) {
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
                this._lMap = $q.defer();
                this.getLMap = function () {
                    return this._lMap.promise;
                };
                this.getLScope = function () {
                    return $scope;
                };
            }],
            link: link
        };

        function link(scope, element, attrs, ctrl) {
            var defaultMap = Default.getDefaultMap();
            var mapID =  attrs.id;

            console.log('scope');
            console.log(scope);

            console.log('attrs');
            console.log(attrs);

            var map = L.map(mapID, {
                zoom: scope.zoom,
                minZoom: scope.minzoom,
                maxZoom: scope.maxzoom
            });
            ctrl._lMap.resolve(map);
        }

        return directive;
    }
})(window, window.angular);
