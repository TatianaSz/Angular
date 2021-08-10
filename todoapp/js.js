const app = angular.module("app",[]);
app.controller("date", ['$scope', function($scope){
    let today=new Date();
    let todayDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+ today.getDate();
    $scope.message= "What will you do today? \n" +todayDate;
}])