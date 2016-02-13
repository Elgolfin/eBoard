const app = require('remote').require('app');
const jetpack = require('fs-jetpack').cwd(app.getAppPath());
var Vue = require('vue');
var mixin = require('../../mixins/mixins.js').mixin;
const timekeeper = require('../../js/timekeeper.js').timekeeper;

exports.sidebar = Vue.extend({
    data: function () {
        return { 
            menuTitle: "4yb",
            links: jetpack.read('./components/shell/sidebar.vue.json','json'),
        }
    },
    computed: {
        currentView: function () {
            return this.$root.currentView
        }
    },
    template: jetpack.read('./components/shell/sidebar.vue.html'),
    mixins: [mixin],
    ready: function() {
        exports.manager(this.$root);
        /*var vm = this.$root;
        var i = 0;
        var pages = ['comp1', 'comp2', 'comp3', 'comp4ybGraphMain'];
        timekeeper.activate(function(){
            vm.currentView = pages[i];
            i++;
            if (i >= pages.length) {
                i = 0;
            }
        });
        */
    }
});

// TODO use the links JSON object to manage the different things to be displayed
exports.manager = function myFunc(viewModel) {
    var i = 0;
    var pages = ['comp1', 'comp2', 'comp3', 'comp4ybGraphMain'];
    timekeeper.active = true;
    timekeeper.activate(function(){
        viewModel.currentView = pages[i];
        i++;
        if (i >= pages.length) {
            i = 0;
        }
    });
}