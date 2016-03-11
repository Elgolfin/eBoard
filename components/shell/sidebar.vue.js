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
            // TODO put the filepath in a config file
            links: jetpack.read('./components/shell/sidebar.vue.json','json'),
            currentView: null
        }
    },
    template: jetpack.read('./components/shell/sidebar.vue.html'),
    mixins: [mixin],
    ready: function() {
        panelsManager.changeView(this.$root);
    },
    events: {
        changeView: function(data) {
            this.currentView = data.name;
        }
    }
});