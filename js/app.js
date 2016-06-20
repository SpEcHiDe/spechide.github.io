var app = angular.module('portfolio', ['ngRoute']);

// create the controller and inject Angular's $scope
app.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
});

// configure our routes
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'partials/home.html'
        })
				.when('/projects', {
            templateUrl : 'partials/projects.html'
        })
        .when('/contactme', {
            templateUrl : 'partials/contactme.html'
        })
        .when('/termsandconditions', {
            templateUrl : 'partials/tnc.html'
        })
				.when('/privacypolicy', {
            templateUrl : 'partials/pp.html'
        })
				.when('/404', {
            templateUrl : 'partials/404.html'
        })
				.when('/education', {
            templateUrl : 'partials/education.html'
        })
				.when('/mobile', {
            templateUrl : 'partials/mobile.html'
        })
				$routeProvider.otherwise({redirectTo: '/404'});
});
