const timekeeper = require('../js/timekeeper.js').timekeeper;

// Mixins
exports.mixin = {
    methods: {
        changeView: function (view, resetViewData) {
            console.log("Change view from " + this.$root.currentView + " to " + view);
            if (resetViewData) {
                this.$root.viewData = {};
            }
            console.log("Stop timer for: " + timekeeper.active + " (" + timekeeper.timeLimit + "ms)");
            timekeeper.active = false;
            var vm = this.$root;
            setTimeout(function() {
                timekeeper.active = true;
                var i = 0;
                var pages = ['comp1', 'comp2', 'comp3', 'comp4ybGraphMain'];
                timekeeper.activate(function(){
                    vm.currentView = pages[i];
                    i++;
                    if (i >= pages.length) {
                        i = 0;
                    }
                });
            }, timekeeper.inactiveTimeLimit);
            
            this.$root.currentView = view;
        }
    }
}