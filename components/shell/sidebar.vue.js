const app = require('remote').require('app');
const jetpack = require('fs-jetpack').cwd(app.getAppPath());
var Vue = require('vue');
var mixin = require('../../mixins/mixins.js').mixin;
//const timekeeper = require('../../js/timekeeper.js').timekeeper;
const panelsManager = require('../../js/panelsManager.js').panelsManager; 

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
        panelsManager.changeView(this.$root);
    }
});

/*
exports.manager = {
    changeView: function myFunc(viewModel) {
        var i = 0;
        var panels = jetpack.read('./components/shell/sidebar.vue.json','json');
        timekeeper.active = true;
        timekeeper.activate(function(){
            viewModel.currentView = panels[i].view;
            viewModel.viewData = panels[i].data;
            i++;
            if (i >= panels.length) {
                i = 0;
            }
        });
    }
};
*/