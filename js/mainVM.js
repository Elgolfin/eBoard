const Vue = require('vue');

// Load all components
var sidebar = require('../components/shell/sidebar.vue.js').sidebar;
var statusbar = require('../components/shell/statusbar.vue.js').statusbar;
var dashboard = require('../components/dashboard/dashboard.vue.js').dashboard;
var mainGraph = require('../components/charts/main.vue.js').main;
var comp1 = require('../components/test/comp1.vue.js').comp1;
var comp2 = require('../components/test/comp2.vue.js').comp2;
var comp3 = require('../components/test/comp3.vue.js').comp3;

// Mixins
var mixin = require('../mixins/mixins.js').mixin;

// Register components
exports.mainVM = new Vue({
    el: 'body',
    data: {
        currentView: 'comp1',
        viewData: null
    },
    components: {
        comp1: comp1,
        comp2: comp2,
        comp3: comp3,
        comp4ybSidebar: sidebar,
        comp4ybStatusbar: statusbar,
        comp4ybDashboard: dashboard,
        comp4ybGraphMain: mainGraph
    },
    methods: {
        
    },
    mixins: [mixin]
});