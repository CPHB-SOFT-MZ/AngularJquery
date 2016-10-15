/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module("AngApp", []);

app.controller("MemberController", ['$http', function($http){
        var self = this;
                
        $http({
            method: 'GET',
            url: 'http://localhost:8080/angularjquery/api/members'
        }).then(function success(response){
            self.persons =  response.data;
        }, function error(response){
           return response; 
        });
}]);