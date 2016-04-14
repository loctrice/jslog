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
    Happy: 'Happy',
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
    Happy: ' ۜ\(סּںסּَ` )/ۜ',
    Airplane: ' ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’'
};

/** Static object to call for logging (i.e. jslogger.log('msg', logtype)). */
var jslogger = (function(console) {
    'use strict';
    console = console || window.console;
    
    var service = {
        log: log, 
        info: info,
        warn: warn,
        error: error
    };
    return service;

    /** Log a message. 
     *  @param {any} thing to log. String, object, etc
     *  @param {JsLoggerTypes} optional, will default to random
     */
    function log(msg, logType) {
        logType = ensureValidLogType(logType);
        if (logType !== JsLoggerTypes.Default) {
            console.log(JsLogStrings[logType]);
        }
        console.log(msg);
    }
    
    /** Log an info message. 
     *  @param {any} thing to log. String, object, etc
     *  @param {JsLoggerTypes} optional, will default to random
     */
    function info(msg, logType) {
        logType = ensureValidLogType(logType);
        if (logType !== JsLoggerTypes.Default) {
            console.info(JsLogStrings[logType]);
        }
        console.info(msg);
    }
    
    /** Log a warning message. 
     *  @param {any} thing to log. String, object, etc
     *  @param {JsLoggerTypes} optional, will default to random
     */
    function warn(msg, logType) {
        logType = ensureValidLogType(logType);
        if (logType !== JsLoggerTypes.Default) {
            console.warn(JsLogStrings[logType]);
        }
        console.warn(msg);
    }
    
    /** Log an error message. 
     *  @param {any} thing to log. String, object, etc
     *  @param {JsLoggerTypes} optional, will default to random
     */
    function error(msg, logType) {
        logType = ensureValidLogType(logType);
        if (logType !== JsLoggerTypes.Default) {
            console.error(JsLogStrings[logType]);
        }
        console.error(msg);
    }

    /** Make sure we don't throw an error if they pass in trash for log type. */    
    function ensureValidLogType(logType) {
        logType = logType || JsLoggerTypes.Random;
        
        if (Object.keys(JsLoggerTypes).indexOf(logType) === -1) {
            logType = getRandomLogType();
        }
        if (logType == JsLoggerTypes.Random) {
            logType = getRandomLogType();
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