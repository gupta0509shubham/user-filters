angular.module('filtersApp.filters.services',[])
.service('filterService',['$http',function($http){

    var fltrService = {};

    fltrService.getRecords = function(success, failure, filters){

        var url= '/v1/api/query_user_details/?filters='+JSON.stringify(filters)
        return $http.get(url).then(success,failure)
    }

    return fltrService;


}])