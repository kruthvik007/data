var app = angular.module('Python', [])

app.controller('py1', function($scope, $http)
{

    var count=0;
    $scope.sub= function()
    {
        count=0;
        $scope.Answer1 = document.getElementById("answer1").value;
        if ($scope.Answer1=="print")
        {
            console.log("Correct!")
            count = count+1;
        }
        else
        {
            console.log("Try Again")

        }

        $scope.Answer2 = document.getElementById("answer2").value;
        if ($scope.Answer2=="x%2!=0"||$scope.Answer2=="x%2==1")
        {
            count=count+1;
        }
        else
        {

        }
        $scope.Answer3 = document.getElementById("answer3").value;
        if($scope.Answer3=="i in range(0,len(a))")
        {
            count=count+1;

        }
        else
        {

        }

        document.getElementById("display4").innerHTML = "Your Score is"+count+"/3";
        console.log(count+"/3")
    }

});

