// All types of logging. Random is expected to be last for use in functions.
var JsLoggerTypes = {
    FlipTable: 'FlipTable',
    Default: 'Default',
    CareCroud: 'CareCroud',
    Finger: 'Finger',
    Shrug: 'Shrug',
    Sleeping: 'Sleeping',
    Knife: 'Knife',
    Sword: 'Sword',
    Airplane: 'Airplane',
    TheTony: 'TheTony',
    Random: 'Random'
};

// Ascii string for each log type.
var JsLogStrings = {
    FlipTable: '(╯°□°）╯︵ ┻━┻)',
    CareCroud: '(-(-_(-_-)_-)-)',
    Finger: '╭∩╮(Ο_Ο)╭∩╮',
    Shrug: '¯\_(ツ)_/¯',
    Sleeping: '(-.-)Zzz...',
    Knife: ')xxxxx[;;;;;;;;;>',
    Sword: '(===||:::::::::::::::>',
    TheTony: '>>>>>>>',
    Airplane: ' ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’'
};

/** Static object to call for logging (i.e. jslogger.log('msg', logtype)). */
var jslogger = (function() {
    'use strict';
    
    var service = {
        log: log
    };
    return service;

    /** Log a message. 
     *  @param {any} thing to log. String, object, etc
     *  @param {JsLoggerTypes} optional, will default to random
     */
    function log(msg, logType) {
        logType = logType || JsLoggerTypes.Random;
        logType = ensureValidLogType(logType);

        if (logType == JsLoggerTypes.Random) {
            logType = getRandomLogType();
        }
        if (logType !== JsLoggerTypes.Default) {
            console.log(JsLogStrings[logType]);
        }
        console.log(msg);
    }

    /** Make sure we don't throw an error if they pass in trash for log type. */    
    function ensureValidLogType(logType) {
        if (Object.keys(JsLoggerTypes).indexOf(logType) === -1) {
            return getRandomLogType();
        }
        return logType;
    }

    /** Grab a log type at random. */    
    function getRandomLogType() {
        var logTypes = Object.keys(JsLoggerTypes);
        logTypes.pop();
        return logTypes[Math.floor(Math.random() * logTypes.length)];
    }

} ());