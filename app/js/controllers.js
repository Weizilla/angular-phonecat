"use strict";

var app = angular.module("phoneCatApp", []);

app.controller("PhoneListCtrl", ["$http", function($http) {
    var self = this;
    $http.get("phones/phones.json").success(function(data) {
        self.phones = data;
    });
    self.orderProp = "age";
}]);