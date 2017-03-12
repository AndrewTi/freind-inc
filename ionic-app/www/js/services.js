angular.module('starter.services', [])

.factory("Plugins", function() {
    const plugins = {
            "1": {
                "name": "Google Calendar",
                "img": "img/note_2.svg"
            },
            "2": {
                "name": "Morning Exercises",
                "img": "img/Dumbbell.svg"
            },
            "3": {
                "name": "Wather",
                "img": "img/weather.svg"
            },
            "4": {
                "name": "Google Calendar",
                "img": "img/note_2.svg"
            },
            "5": {
                "name": "Morning Exercises",
                "img": "img/Dumbbell.svg"
            },
            "6": {
                "name": "Wather",
                "img": "img/weather.svg"
            },
            "7": {
                "name": "Google Calendar",
                "img": "img/note_2.svg"
            },
            "8": {
                "name": "Morning Exercises",
                "img": "img/Dumbbell.svg"
            },
            "9": {
                "name": "Wather",
                "img": "img/weather.svg"
            },
            "10": {
                "name": "Google Calendar",
                "img": "img/note_2.svg"
            },
            "11": {
                "name": "Morning Exercises",
                "img": "img/Dumbbell.svg"
            },
            "12": {
                "name": "Wather",
                "img": "img/weather.svg"
            },
            "13": {
                "name": "Google Calendar",
                "img": "img/note_2.svg"
            },
            "14": {
                "name": "Morning Exercises",
                "img": "img/Dumbbell.svg"
            },
            "15": {
                "name": "Wather",
                "img": "img/weather.svg"
            }
        };

    function getData() {
        return plugins;
    };

    return {
        getData: getData
    };
})