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
        var vm = this.$root;
        var i = 0;
        var pages = ['comp1', 'comp2', 'comp3', 'comp4ybGraphMain'];
        timekeeper.activate(function(){
            vm.currentView = pages[i];
            i++;
            if (i >= pages.length) {
                i = 0;
            }
        });
    }
});