const timekeeper = require('../js/timekeeper.js').timekeeper;
const manager = require('../js/panelsManager.js').panelsManager;

// Mixins
exports.mixin = {
    methods: {
        changeView: function (view, viewData) {
            //console.log("Change view from " + this.$root.currentView + " to " + view);
            viewData = viewData || {};
            this.$root.viewData = viewData;
            //console.log("Stop timer for: " + timekeeper.active + " (" + timekeeper.timeLimit + "ms)");
            timekeeper.active = false;
            var vm = this.$root;
            vm.$broadcast("changeView", viewData);
            setTimeout(function() {
                manager.changeView(vm);
            }, timekeeper.inactiveTimeLimit);
            //}, timekeeper.inactiveTimeLimit, vm); // pass the viewmodel as an arg
            
            this.$root.currentView = view;
        }
    }
}