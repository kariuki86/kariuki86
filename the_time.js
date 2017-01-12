var theTime = angular.module("theTime", []);

theTime.controller("TimeCtrl", function($scope) {
    
  $scope.currentTime = Date.now();
  
  
  var animateClock = function() {
    var h = new Date($scope.currentTime).getHours();
    var m = new Date($scope.currentTime).getMinutes();
    var s = new Date($scope.currentTime).getSeconds();
    
    $(".hour").css("transform", "rotate(" + h * (360/12) + "deg) translate(-50%,-100%)");
    $(".minute").css("transform", "rotate(" + m * (360/60) + "deg) translate(-50%,-100%)");
    $(".second").css("transform", "rotate(" + s * (360/60) + "deg) translate(-50%,-100%)");
  }
  
  var tickTock = function(){
    $scope.currentTime = Date.now();
    var h = new Date($scope.currentTime).getHours();
    var m = new Date($scope.currentTime).getMinutes();
    var s = new Date($scope.currentTime).getSeconds();
    
    animateClock();
    
    $scope.$apply();
  };
  
  animateClock();
  setInterval(tickTock, 1000);  
  
});