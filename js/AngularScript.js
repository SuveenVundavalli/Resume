var app = angular.module("myApp", []);
app.controller("myController", function ($scope) {
    $scope.show = "true";
    $scope.showSection = function (currentSection) {
        if ($scope.show !== currentSection) {
            $scope.show = currentSection;
        } else {
            $scope.show = 'hideAll';
        }


        console.log($scope.show);
    };
});
