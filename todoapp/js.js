const app = angular.module("app",[]);
app.controller("date", ['$scope', function($scope){
    let today=new Date();
    let todayDate = today.getFullYear()+"-"+(today.getMonth()<10?"0"+parseInt(today.getMonth()+1):today.getMonth()+1)+"-"+ (today.getDate()<10?"0"+today.getDate():today.getDate());
    $scope.message= "What will you do today? \n" +todayDate;
}])

app.controller("taski", ["$scope", function($scope){
    $scope.tasks = [
        {taskName: "Fill my task list!",
         hour: "Everyday!"
        },
    ]
}])