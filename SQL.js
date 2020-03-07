var app = angular.module('SQL', [])

app.controller('sql1', function($scope, $http)
{

    var count=0;
    $scope.sub= function()
    {
        $scope.Answer1 = document.getElementById("answer1").value;
        if ($scope.Answer1=="SELECT * FROM Employee")
        {
            console.log("Correct!")
            count = count+1;
        }
        else
        {
            console.log("Try Again")

        }

        $scope.Answer2 = document.getElementById("answer2").value;
        if ($scope.Answer2=="UPDATE Employee SET Country = 'China' WHERE id = 10 ")
        {
            count=count+1;
        }
        else
        {

        }
        $scope.Answer3 = document.getElementById("answer3").value;
        if($scope.Answer3=="ALTER TABLE Employee ADD COLUMN CustType VARCHAR(10)")
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

