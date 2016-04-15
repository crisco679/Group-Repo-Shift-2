var app = angular.module("greenApp", []);

app.controller("GreenController", ["$http", function($http) {
  var person = this;
  person.usersList = [];
  person.getInfo = function(){
    $http.get("/create").then(function(response) {
    console.log('data for /create',response.data);
    person.usersList = [];
    person.usersList = response.data;
      });
   };
}])
