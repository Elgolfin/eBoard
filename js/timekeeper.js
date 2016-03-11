exports.timekeeper = {
    active: true,
    timeLimit: 1000 * 3,   // 15 seconds
    delayTimeLimit: 1000 * 60 * 3, // 3 minutes
    stopTimeLimit: 1000 * 60 * 15, // 15 minutes
    activate: function (func) {
        if (exports.timekeeper.active) {
            func();
            clearTimeout(exports.timekeeper.timer);
            exports.timekeeper.start(exports.timekeeper.activate, func);
        }
    },
    start: function (func, funcArgs) {
        exports.timekeeper.setTimer(exports.timekeeper.timeLimit, true, func, funcArgs);
    },
    /*
    Use this when a user interacts with the eBoard, it will delay the execution of the next panel
    */
    delay: function (func, funcArgs) {
        exports.timekeeper.setTimer(exports.timekeeper.delayTimeLimit, false, func, funcArgs);
    },
    stop: function (func, funcArgs) {
        exports.timekeeper.setTimer(exports.timekeeper.stopTimeLimit, false, func, funcArgs);
    },
    setTimer: function (timeLimit, active, func, funcArgs) {
        exports.timekeeper.active = active;
        clearTimeout(exports.timekeeper.timer);
        exports.timekeeper.timer = setTimeout(function() {
            func(funcArgs);
        }, timeLimit);
        exports.timekeeper.createProgressBar('progressbar', (timeLimit / 1000) + 's');
    },
    timer: null,
    /*
    *  Creates a progressbar.
    *  @param id the id of the div we want to transform in a progressbar
    *  @param duration the duration of the timer example: '10s'
    *  @param callback, optional function which is called when the progressbar reaches 0.
    */
    createProgressBar: function (id, duration, callback) {
        // We select the div that we want to turn into a progressbar
        var progressbar = document.getElementById(id);
        if (progressbar) {
            progressbar.className = 'progressbar';

            // We create the div that changes width to show progress
            var progressbarinner = document.createElement('div');
            progressbarinner.className = 'inner';

            // Now we set the animation parameters
            progressbarinner.style.animationDuration = duration;

            // Eventually couple a callback
            if (typeof(callback) === 'function') {
                progressbarinner.addEventListener('animationend', callback);
            }

            // Append the progressbar to the main progressbardiv
            if (progressbar.childNodes.length) {
                progressbar.removeChild(progressbar.childNodes[0]);
            }
            
            progressbar.appendChild(progressbarinner);

            // When everything is set up we start the animation
            progressbarinner.style.animationPlayState = 'running';
        }
    }
};