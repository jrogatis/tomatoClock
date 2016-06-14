
// JavaScript Document
 'use strict';



var app = angular.module('appPomodoro', []);
//funcão que inicia o timer
 
app.controller('MainCtrl',  function($scope, $interval) {
	 $scope.Timer = null;
	var cicle = "Session";
	//var timerStarted;
	var init = function () {
		$scope.breakTimer = 5;
		$scope.workTimer = 25;
		$scope.timerDisplay = $scope.workTimer; 
		}; //FIM DO INIT
	
	init();
	
	$scope.addBreak = function (value) {
		if (cicle === "Break") {
				$scope.timerDisplay += value;
			}
		$scope.breakTimer += value;	
		};
	
	$scope.addWork = function (value) {
		$scope.workTimer += value;	
		if (cicle === "Session") {
				$scope.timerDisplay += value;
			}
		
		};
	
	 //Timer start function.
	 var timerIsOn = false;
      $scope.StartTimer = function () {
             
					$scope.sessionDisplay = cicle;
			
				  if (!timerIsOn) {
					  	timerIsOn = true;
						$scope.Timer = $interval(function () {
							//Display the current time.   
							 
							if ( $scope.timerDisplay === 0) {			
									//
									if (cicle === "Session"){
										cicle = "Break";
										$scope.timerDisplay = $scope.breakTimer;
									
									} else { 
										cicle = "Session";
										$scope.timerDisplay = $scope.workTimer;
										
										}	
										
								}  else {
									$scope.timerDisplay = $scope.timerDisplay -1;
								}
						   	$scope.sessionDisplay = cicle;
						}, 60000);
						
						
				  } else {
					   	timerIsOn = false;
					  $interval.cancel($scope.Timer);
					  }
            };

		
		
 }); //FIM DO CONTROLER
  

 

  

 
  