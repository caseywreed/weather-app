"use strict";

let weatherCall = require('./weather-call.js')

function setEvents () {
    $('#zipSubmitButton').on('click', weatherCall)
}

module.exports = setEvents;