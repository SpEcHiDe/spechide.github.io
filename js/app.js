var app = angular.module('portfolio', ['ngRoute']);

// create the controller and inject Angular's $scope
app.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
});

// configure our routes
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'partials/home.html',
            controller  : 'homeController'
        })
				.when('/projects', {
            templateUrl : 'partials/projects.html',
            controller  : 'appController'
        })
        .when('/contactme', {
            templateUrl : 'partials/contactme.html',
            controller  : 'contactController'
        })
        .when('/termsandconditions', {
            templateUrl : 'partials/tnc.html',
            controller  : 'tncController'
        })
        .when('/privacypolicy', {
            templateUrl : 'partials/pp.html',
            controller  : 'ppController'
        })
				$routeProvider.otherwise({redirectTo: '/', controller: 'homeController'});
				// use the HTML5 History API
    		$locationProvider.html5Mode({
						enabled: true,
						requireBase: false,
						rewriteLinks: true
				});
});

app.controller('homeController', function($scope) {
    $scope.message = 'APP -- under construction';
});

app.controller('appController', function($scope) {
    $scope.message = 'APP -- under construction';
		fireEvent(document.getElementById('search'));
});

app.controller('contactController', function($scope) {
    $scope.message = 'APP -- under construction';
});

app.controller('tncController', function($scope) {
    $scope.message = 'APP -- under construction';
});

app.controller('ppController', function($scope) {
    $scope.message = 'APP -- under construction';
});
