angular.module('app')
    .controller('EventsCtrl', function ($scope, EventsSvc) {
        $scope.addEvent = function () {
             if($scope.eventBody){
                EventsSvc.create({
                    title: '',
                    votes : 0
                }).
                success(function (event) {
                    $scope.pitches.unshift(event)
                    $scope.postBody = null         
                })
            }
        }
        EventsSvc.fetch().success(function (events) {

            $scope.events = events
        })         
    })
