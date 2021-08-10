const app = angular.module("app",[]);
app.controller("date", ['$scope', function($scope){
    let today=new Date();
    let todayDate = today.getFullYear()+"-"+(today.getMonth()<10?"0"+parseInt(today.getMonth()+1):today.getMonth()+1)+"-"+ (today.getDate()<10?"0"+today.getDate():today.getDate());
    $scope.message= "What will you do today? \n" +todayDate;
}])

app.controller("taski", ["$scope", function($scope){
    $scope.init = function () {
        let items = JSON.parse(window.localStorage.getItem('taskInfo'))
   console.log(JSON.parse(window.localStorage.getItem('taskInfo')))
   for(let i = 1;i<items.length;i++){
   $scope.tasks.push(items[i])
   }
    }

$scope.sort=function(){
    $scope.tasks.sort(function(a, b) {
        return parseFloat(parseInt(a.hour.split(":")[0]*60)+ parseInt(a.hour.split(":")[1])) - parseFloat(parseInt(b.hour.split(":")[0]*60)+ parseInt(b.hour.split(":")[1]))
    });

}

$scope.addTask = function(){
    let time = ($scope.whenAdd.getHours()<10?"0"+$scope.whenAdd.getHours():$scope.whenAdd.getHours()) +":" + ($scope.whenAdd.getMinutes()<10?"0"+$scope.whenAdd.getMinutes():$scope.whenAdd.getMinutes())

    $scope.tasks.push({
        taskName: $scope.whatAdd,
        hour: time,
    })
    window.localStorage.setItem('taskInfo', JSON.stringify($scope.tasks));
    console.log(JSON.parse(window.localStorage.getItem('taskInfo')))
}
$scope.removeTask=function(task){
   const removed = $scope.tasks.indexOf(task);
    $scope.tasks.splice(removed,1);
    window.localStorage.setItem('taskInfo', JSON.stringify($scope.tasks));
}

    $scope.tasks = [
        {taskName: "Fill my task list!",
         hour: "Everyday!"
        },
    ]

    $scope.init();
}
])