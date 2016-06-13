
// JavaScript Document
 'use strict';



var app = angular.module('appPomodoro', []);
//funcão que inicia o timer

  
app.controller('MainCtrl',  function($scope, $interval) {
	 $scope.Timer = null;
	var init = function () {
		$scope.breakTimer = 5;
		$scope.workTimer = 5;
		$scope.timerDisplay = $scope.workTimer; 
		}; //FIM DO INIT
	
	init();
	
	$scope.addBreak = function (value) {
		$scope.breakTimer += value;	
		};
	
	
	$scope.addWork = function (value) {
		$scope.workTimer += value;	
		  $scope.timerDisplay += value;
		
		};
	
	 //Timer start function.
      $scope.StartTimer = function () {
                //Initialize the Timer to run every 1000 milliseconds i.e. one second.
                $scope.Timer = $interval(function () {
                    //Display the current time.   
					 
					if ( $scope.timerDisplay === 0) {			
						  $interval.cancel($scope.Timer);
						}  else {
							 $scope.timerDisplay = $scope.timerDisplay -1;
						}
                   
                }, 3000);
            };

		$scope.StopTimer = function () {
 
                //Set the Timer stop message.
                $scope.Message = "Timer stopped.";
 
                //Cancel the Timer.
                if (angular.isDefined($scope.Timer)) {
                    $interval.cancel($scope.Timer);
                }
            }; 
	
	
 }); //FIM DO CONTROLER
  

 

  

 
  