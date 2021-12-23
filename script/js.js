var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {

    $routeProvider

        .when("/",{
            templateUrl: "index.html"

        })
        .when("/res",{
            templateUrl: "residential.html"

        })
        .when("/com",{
            templateUrl: "commercial.html"

        })
        .when("/mets",{
            templateUrl: "method.html"

        })
        .when("/devs",{
            templateUrl: "development.html"

        })
        .when("/cont",{
            templateUrl: "contact.html"

        });
});

// app.controller("mainCtrl", function($scope, $http) {

//     $http.get("json.json").then(function(response) {
//         $scope.Data = response.data;
//         return $scope.Data;
//     });
// });