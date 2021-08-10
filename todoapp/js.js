const app = angular.module("app",[]);
app.controller("date", ['$scope', function($scope){
    let today=new Date();
    let todayDate = today.getFullYear()+"-"+(today.getMonth()<10?"0"+parseInt(today.getMonth()+1):today.getMonth()+1)+"-"+ (today.getDate()<10?"0"+today.getDate():today.getDate());
    $scope.message= "What will you do today? \n" +todayDate;
}])

app.controller("taski", ["$scope", function($scope){
$scope.addTask = function(){
    let time = $scope.whenAdd.getHours() +":" + $scope.whenAdd.getMinutes()

    $scope.tasks.push({
        taskName: $scope.whatAdd,
        hour: time,
    })
}
$scope.removeTask=function(task){
   const removed = $scope.tasks.indexOf(task);
    $scope.tasks.splice(removed,1);
}

    $scope.tasks = [
        {taskName: "Fill my task list!",
         hour: "Everyday!"
        },
    ]
}])