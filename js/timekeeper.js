exports.timekeeper = {
    active: true,
    timeLimit: 1000 * 15,   // 15 seconds
    delayTimeLimit: 1000 * 60 * 3, // 3 minutes
    stopTimeLimit: 1000 * 60 * 15, // 15 minutes
    activate: function (func) {
        if (exports.timekeeper.active) {
            func();
            var exec = exports.timekeeper.activate;
            //var argFunc = func;
            clearTimeout(exports.timekeeper.timer);
            exports.timekeeper.timer = setTimeout(function () {
                exec(func);
            }, exports.timekeeper.timeLimit);
            exports.timekeeper.createProgressBar('progressbar', (exports.timekeeper.timeLimit / 1000) + 's');
        }
    },
    start: function (func, funcArgs) {
        exports.timekeeper.active = true;
        clearTimeout(exports.timekeeper.timer);
        func(funcArgs);
        exports.timekeeper.timer = setTimeout(function() {
            func(funcArgs);
        }, exports.timekeeper.timeLimit);
        exports.timekeeper.createProgressBar('progressbar', (exports.timekeeper.timeLimit / 1000) + 's');
    },
    /*
    Use this when a user interacts with the eBoard, it will delay the execution of the next panel
    */
    delay: function (func, funcArgs) {
        exports.timekeeper.active = false;
        clearTimeout(exports.timekeeper.timer);
        exports.timekeeper.timer = setTimeout(function() {
            func(funcArgs);
        }, exports.timekeeper.delayTimeLimit);
        exports.timekeeper.createProgressBar('progressbar', (exports.timekeeper.delayTimeLimit / 1000) + 's');
    },
    stop: function (func, funcArgs) {
        exports.timekeeper.active = false;
        clearTimeout(exports.timekeeper.timer);
        exports.timekeeper.timer = setTimeout(function() {
            func(funcArgs);
        }, exports.timekeeper.stopTimeLimit);
        exports.timekeeper.createProgressBar('progressbar', (exports.timekeeper.stopTimeLimit / 1000) + 's');
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
        console.log(progressbar);
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