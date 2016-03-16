(function(window, angular, undefined) {
    'use strict';

    angular
        .module('angular-leaflet')
        .service('Default', Service);

    function Service() {
        var _map = {
            id: 'mapID',
            center: L.latLng(50.5, 33.5)
        }

        this.getDefaultMap = function(){
            return _map;
        }
    }
})(window, window.angular);
