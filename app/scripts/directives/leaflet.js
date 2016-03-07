(function(angular) {
    'use strict';

    angular
        .module('angular-leaflet')
        .directive('leaflet', Directive);

    Directive.$inject = [];

    function Directive() {
        var directive = {
            restrict: 'EA',
            replace: true,
            transclude: true,
            scope: {
                center: '=',
                zoom: '=',
                maxbounds: '=',
                tiles: '='
            },
            template: '<div class="angular-leaflet"><div data-ng-transclude></div></div>',
            link: link
        };

        function link(scope, element, attrs) {
            console.log(0);
            console.log(scope);
            //console.log(attrs);
            var map = L.map(attrs.id, {
                center: scope.center,
                zoom: scope.zoom
            });

            //'https://api.mapbox.com/v4/phase-ii.a6x8cy53/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicGhhc2UtaWkiLCJhIjoiNTA5MmExODlhNmE0YWQ5M2Y4NGU0ZTk4YzQwOTJiNWIifQ.RLBMf3gnv2WPRXS6A6bgPg'
            L.tileLayer(scope.tiles.url, {
            //    //id: 'phase-ii.a6x8cy53',
            //    //accessToken: 'pk.eyJ1IjoicGhhc2UtaWkiLCJhIjoiNTA5MmExODlhNmE0YWQ5M2Y4NGU0ZTk4YzQwOTJiNWIifQ.RLBMf3gnv2WPRXS6A6bgPg'
            }).addTo(map);

            L.marker([50.5, 30.5]).addTo(map);
        }

        return directive;
    }
})(window.angular);
