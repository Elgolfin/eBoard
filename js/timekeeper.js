exports.timekeeper = { 
    active: true,
    timeLimit: 1000 * 20,   // 20 seconds
    inactiveTimeLimit: 1000 * 60 * 15, // 15 minutes
    activate: function (func) {
        if (exports.timekeeper.active) {
            func();
            var exec = exports.timekeeper.activate;
            var argFunc = func;
            setTimeout(function() {
                exec(argFunc);
            }, exports.timekeeper.timeLimit);
        }
    }
}