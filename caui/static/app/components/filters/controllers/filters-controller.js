angular.module('filtersApp.filters.controller',[])
.controller('filtersController', ['$scope','filterService', function($scope,filterService){

    var scope = this;

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


    scope.getRecords = function(){

    	var success = function(response){
            scope.results = response.data;
    	}

    	var failure = function(error){

    		console.log(error)

    	}

    	filterService.getRecords(success, failure, scope.filterObject)


    }



    return scope;

}]);