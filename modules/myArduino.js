/** getting johnny five module */
var five = require("johnny-five");

var board = null
var led = null


var readyCallback = function () {
    console.log("### Board ready!");
    led = new five.Led(13);
}

var exitCallback = function () {
    console.log('exit')
}


var myArduino = {

    connect: function () {

        board = new five.Board();
        board.on("ready", readyCallback);
        board.on("exit", exitCallback);
        board.on("close", exitCallback);
    },


    on: function () {
        led.on()
    },

    off: function () {
        led.off()
    },

    blink: function () {
        led.blink()
    },

    stop: function () {
        led.stop()
        this.off()
    },

    isConnected: function () {
        return board.isConnected
    }
}


module.exports = myArduino