exports.timekeeper = {
    active: true,
    timeLimit: 1000 * 12,   // 12 seconds
    inactiveTimeLimit: 1000  * 12, // 12 minutes
    activate: function (func) {
        if (exports.timekeeper.active) {
            func();
            var exec = exports.timekeeper.activate;
            var argFunc = func;
            setTimeout(function () {
                exec(argFunc);
            }, exports.timekeeper.timeLimit);
        }
    }
};