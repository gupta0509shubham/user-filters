var filtersApp = angular.module('filtersApp',
    [
    'ngMaterial',
    'ui.router',
    'filtersApp.filters'
    ]);

filtersApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/filters');

    $stateProvider

        .state('filters', {
            url: '/filters',
            views: {
                "main" : {
                    "templateUrl" : '/static/app/components/filters/views/filters.html',
                    "controller": 'filtersController',
                    "controllerAs": '$filtersCtrl'
                }
            }
        })
});
