"use strict";

let weatherCall = require('./weather-call.js')
let login = require('./user.js')

let userID = null;

function setEvents () {
    $('#zipSubmitButton').on('click', weatherCall)

    $("#auth-button").click(function() {
        console.log('auth running')
        login()
        .then(function (result) {
        console.log("current user", result.user)
        let user = result.user
        userID = user.uid
        console.log("user ID", userID)
          })
    });
}

function getUserID () {
    return userID;
}

module.exports = { setEvents, getUserID };