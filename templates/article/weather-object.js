"use strict";

let weatherTemplate = require('./weather.hbs');

function buildWeatherObject(weatherData) {
    let eventHandler = require('../../src/js/events.js');
    console.log("building  weather Object")
    let userID = eventHandler.getUserID()
    let weatherObj = {
        uid: userID,
        name: weatherData.name,
        temp: weatherData.main.temp,
        humidity: weatherData.main.humidity,
        windspeed: weatherData.wind.speed,
        saved: false
    }
    outputToDom(weatherObj)
    console.log("built weather Object", weatherObj)
}

function outputToDom (weatherObj) {
    let output = weatherTemplate(weatherObj)
    $('.output').append(output)
}

module.exports = buildWeatherObject;