/* global global */
// Here is the starting point for code of your own application.
// All stuff below is just to show you how it works. You can delete all of it.

// Modules which you authored in this project are intended to be
// imported through new ES6 syntax.
//import { greet } from './testImport.js';
//console.log(greet());

// Node.js modules and those from npm
// are required the same way as always.
const remote = require('electron').remote;
const app = require('remote').require('app');
const jetpack = require('fs-jetpack').cwd(app.getAppPath());

// Holy crap! This is browser window with HTML and stuff, but I can read
// here files like it is node.js! Welcome to Electron world :)
//console.log(jetpack.read('package.json', 'json'))

const Vue = require('vue');
const kpi = require('./components/charts/kpi.vue.js').kpi;
const statusbar1 = require('./components/shell/statusbar.vue.js').statusbar;

Vue.component('kpi', kpi);
Vue.component('comp4ybStatusbar', statusbar1);

var vm = require('./js/mainVM.js').mainVM;