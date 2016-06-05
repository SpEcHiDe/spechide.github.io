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
				.when('/404', {
            templateUrl : 'partials/404.html',
            controller  : 'fourzerofourController'
        })
				// .when('/.well-known/acme-challenge/GvxUQocMySL8It7TqY6395QXXEF2IlULTeREhUC83kw', {
        //     templateUrl : 'partials/letsencrypt.html',
        //     controller  : 'letsencryptController'
        // })
				$routeProvider.otherwise({redirectTo: '/404', controller: 'fourzerofourController'});
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

// app.controller('letsencryptController', function($scope) {
//     $scope.message = 'GvxUQocMySL8It7TqY6395QXXEF2IlULTeREhUC83kw.ppPVj7qXtTwSPxLm7keAclB7fKbfLj4_2E8eM3i0xSg';
// });

app.controller('fourzerofourController', function($scope) {
    $scope.message = 'sorry, but the page you are looking for cannot be found!';
});
