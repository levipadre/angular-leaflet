(function(window, angular, undefined) {
    'use strict';

    angular
        .module('app')
        .controller('AppCtrl', Ctrl);

    Ctrl.$inject = ['$scope'];

    function Ctrl($scope) {
        var apikey = 'pk.eyJ1IjoicGhhc2UtaWkiLCJhIjoiNTA5MmExODlhNmE0YWQ5M2Y4NGU0ZTk4YzQwOTJiNWIifQ.RLBMf3gnv2WPRXS6A6bgPg',
            mapid = 'phase-ii.a6x8cy53';

        $scope.tilesDict = {
            openstreetmap: {
                url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                options: {
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }
            },
            opencyclemap: {
                url: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
                options: {
                    attribution: 'All maps &copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, map data &copy; <a href="http://www.openstreetmap.org">OpenStreetMap</a> (<a href="http://www.openstreetmap.org/copyright">ODbL</a>'
                }
            },
            mapbox: {
                name: 'Mapbox',
                url: 'http://api.tiles.mapbox.com/v4/' + mapid + '/{z}/{x}/{y}.png?access_token=' + apikey
            }
        };

        var mainMarker = {
            lat: 50.5,
            lng: 30.5,
            options: {
                focus: true,
                message: "Hey, drag me if you want",
                draggable: true
            }
        };

        $scope.regions = {
            london: {
                northEast: {
                    lat: 51.51280224425956,
                    lng: -0.11681556701660155
                },
                southWest: {
                    lat: 51.50211782162702,
                    lng: -0.14428138732910156
                }
            },
            lisbon: {
                southWest: {
                    lat: 38.700247900602726,
                    lng: -9.165430068969727
                },
                northEast: {
                    lat: 38.72703673982525,
                    lng: -9.110498428344725
                }
            },
            warszawa: {
                southWest: {
                    lat: 52.14823737817847,
                    lng: 20.793685913085934
                },
                northEast: {
                    lat: 52.31645452105213,
                    lng: 21.233139038085938
                }
            }
        };

        $scope.exampleCenter = L.latLng(50.5, 30.5);
        $scope.exampleZoom = 6;
        $scope.exampleMaxBounds = $scope.regions.london;
        $scope.exampleTiles = $scope.tilesDict.openstreetmap;
        $scope.exampleMarkers = angular.copy(mainMarker);

        var callInit = function(){

        }

        callInit();
    }
})(window, window.angular);