var console=(function(windowConsole){
    return {
        log: function(text, logType){
            jslogger.log(text, logType);
        },
        info: function (text, logType) {
            jslogger.info(text, logType);
        },
        warn: function (text, logType) {
            jslogger.warn(text, logType);
        },
        error: function (text, logType) {
            jslogger.error(text, logType);
        }
    };
}(window.console));

window.console = console;