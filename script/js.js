var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {

    $routeProvider

        .when("/res",{
            templateUrl: "residential.html",
            controller: "addCtrl"
        })
        .when("/com",{
            templateUrl: "commercial.html",
            controller: "addCtrl"
        })
        .when("/mets",{
            templateUrl: "methods.html",
            controller: "addCtrl"
        })
        .when("/dev",{
            templateUrl: "development.html",
            controller: "addCtrl"
        })
        .when("/cont",{
            templateUrl: "contact_us.html",
            controller: "addCtrl"
        });
});

// app.controller("mainCtrl", function($scope, $http) {

//     $http.get("json.json").then(function(response) {
//         $scope.Data = response.data;
//         return $scope.Data;
//     });
// });