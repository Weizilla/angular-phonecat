"use strict";

var app = angular.module("phoneCatApp", []);

app.controller("PhoneListCtrl", function() {
    var self = this;
    self.phones = [
        { 'name' : 'Nexus S',
            'snippet' : 'Fast just got faster with Nexus S.' },
        { 'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.' },
        { 'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.' }
    ];
});