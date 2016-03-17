(function(window, angular, undefined) {
    'use strict';

    angular
        .module('angular-leaflet')
        .service('Default', Service);

    function Service() {
        var _map = {
            id: 'mapID',
            center: {
                lat: 0,
                lng: 0,
                zoom: 1
            }
        }

        this.getDefaultMap = function(){
            return _map;
        }
    }
})(window, window.angular);
