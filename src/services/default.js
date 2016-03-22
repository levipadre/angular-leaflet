(function(window, angular, undefined) {
    'use strict';

    angular
        .module('angular-leaflet')
        .service('Default', Service);

    function Service() {
        var _map = {
            center: {
                lat: 0,
                lng: 0,
                zoom: 1
            },
            layer : {
                url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                options: {
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }
            }
        }

        //return {
        //    getDefaultMap: function () {
        //        return _map;
        //    }
        //}

        this.getDefaultMap = function(){
            return _map;
        }
    }
})(window, window.angular);
