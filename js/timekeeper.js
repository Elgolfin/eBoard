exports.timekeeper = {
    active: true,
    timeLimit: 1000 * 12,   // 12 seconds
    inactiveTimeLimit: 1000 * 60 * 1, // 1 minute
    activate: function (func) {
        if (exports.timekeeper.active) {
            func();
            var exec = exports.timekeeper.activate;
            var argFunc = func;
            clearTimeout(exports.timekeeper.timer);
            exports.timekeeper.timer = setTimeout(function () {
                exec(argFunc);
            }, exports.timekeeper.timeLimit);
            exports.timekeeper.createProgressBar('progressbar', (exports.timekeeper.timeLimit / 1000) + 's');
        }
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