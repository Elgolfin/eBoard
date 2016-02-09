// Here is the starting point for code of your own application.
// All stuff below is just to show you how it works. You can delete all of it.

// Modules which you authored in this project are intended to be
// imported through new ES6 syntax.
//import { greet } from './testImport.js';
//console.log(greet());

// Node.js modules and those from npm
// are required the same way as always.
const app = require('remote').require('app')
const jetpack = require('fs-jetpack').cwd(app.getAppPath())

// Holy crap! This is browser window with HTML and stuff, but I can read
// here files like it is node.js! Welcome to Electron world :)
//console.log(jetpack.read('package.json', 'json'))

const Vue = require('vue');
const Datastore = require('nedb');
 
var db_4yb_filepath = require('remote').getGlobal('filepath');

// Load all components
var sidebar = require('./components/shell/sidebar.vue.js').sidebar;
var statusbar = require('./components/shell/statusbar.vue.js').statusbar;
var dashboard = require('./components/dashboard/dashboard.vue.js').dashboard;
var mainGraph = require('./components/charts/main.vue.js').main;
var comp1 = require('./components/test/comp1.vue.js').comp1;
var comp2 = require('./components/test/comp2.vue.js').comp2;
var comp3 = require('./components/test/comp3.vue.js').comp3;

// Mixins
var mixin = require('./mixins/mixins.js').mixin;

// Register components
var mainVM = new Vue({
    el: 'body',
    data: {
        currentView: 'comp4ybListAccounts',
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