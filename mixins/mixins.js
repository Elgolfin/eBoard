const timekeeper = require('../js/timekeeper.js').timekeeper;
const manager = require('../js/panelsManager.js').panelsManager;

// Mixins
exports.mixin = {
    methods: {
        changeView: function (view, viewData) {
            viewData = viewData || {};
            this.$root.viewData = viewData;
            
            var vm = this.$root;
            vm.$broadcast("changeView", viewData);
            
            timekeeper.delay(manager.changeView, this.$root);
            
            this.$root.currentView = view;
        },
        stopTimer: function () {
            timekeeper.stop(manager.changeView, this.$root);
        },
        startTimer: function () {
            timekeeper.start(manager.changeView, this.$root);
        }
    }
}