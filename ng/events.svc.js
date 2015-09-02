angular.module('app')
    .service('EventsSvc', function ($http){
        this.fetch = function () {
            return $http.get('/api/events')
        }       
        this.create = function (event) {
            return $http.post('/api/events', event)
        }
    })
