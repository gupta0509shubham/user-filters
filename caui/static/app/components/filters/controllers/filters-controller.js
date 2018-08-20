angular.module('filtersApp.filters.controller',[])
.controller('filtersController', ['$scope','filterService', function($scope,filterService){

    var scope = this;

    scope.fresh = true;

    scope.results = []

    scope.locations = [

    	"Andhra Pradesh",
    	"Arunachal Pradesh",
    	"Assam",
    	"Bihar",
    	"Chhattisgarh",
    	"Goa",
    	"Gujarat",
    	"Haryana",
    	"Himachal Pradesh",
    	"Jammu and Kashmir",
    	"Jharkhand",
    	"Karnataka",
    	"Kerala",
    	"Madhya Pradesh",
    	"Maharashtra",
    	"Manipur",
    	"Meghalaya",
    	"Mizoram",
    	"Nagaland",
    	"Odisha",
    	"Punjab",
    	"Rajasthan",
    	"Sikkim",
    	"Tamil Nadu",
    	"Telangana",
    	"Tripura",
    	"Uttar Pradesh",
    	"Uttarakhand",
    	"West Bengal"
    ]

		scope.pLocations = [

    	"Andhra Pradesh",
    	"Arunachal Pradesh",
    	"Assam",
    	"Bihar",
    	"Chhattisgarh",
    	"Goa",
    	"Gujarat",
    	"Haryana",
    	"Himachal Pradesh",
    	"Jammu and Kashmir",
    	"Jharkhand",
    	"Karnataka",
    	"Kerala",
    	"Madhya Pradesh",
    	"Maharashtra",
    	"Manipur",
    	"Meghalaya",
    	"Mizoram",
    	"Nagaland",
    	"Odisha",
    	"Punjab",
    	"Rajasthan",
    	"Sikkim",
    	"Tamil Nadu",
    	"Telangana",
    	"Tripura",
    	"Uttar Pradesh",
    	"Uttarakhand",
    	"West Bengal"
    ]

    scope.experience = [1,2,3,4,5,6,7,8,9,10]

    scope.skills = [
    	'Python',
    	'Java',
    	'Javascript',
    	'C',
    	'Data Structure',
    	'HTML',
    	'CSS'
    ]

    scope.filterObject = {

    	uResume: null,
    	uLocations: null,
    	uExperience: null,
    	uPLocations: null,
    	uSkills: null,
    	uCtc	: null

    }


    scope.reset = function(){
        scope.results = []
        scope.fresh = true;
        scope.filterObject = {

            uResume: null,
            uLocations: null,
            uExperience: null,
            uPLocations: null,
            uSkills: null,
            uCtc    : null

        }        
    }


    scope.getRecords = function(){
        scope.fresh = false;
        scope.results = [];
    	var success = function(response){
            scope.results = response.data;
    	}

    	var failure = function(error){

    		console.log(error)

    	}

    	filterService.getRecords(success, failure, scope.filterObject)


    }

    scope.downloadDetails = function(obj){   
        var csvData = convertToCSV([obj])
        var dataStr = "data:text/csv;charset=utf-8," + encodeURIComponent(csvData);
        var dlAnchorElem = document.getElementById('downloadAnchorElem');
        dlAnchorElem.setAttribute("href",     dataStr     );
        dlAnchorElem.setAttribute("download", obj.name+".csv");
        dlAnchorElem.click();
    }

    function convertToCSV(objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';

        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '') line += ','

                line += array[i][index];
            }

            str += line + '\r\n';
        }

        return str;
    }

    return scope;

}]);