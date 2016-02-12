/* global global, process */
const app = require('remote').require('app');
const jetpack = require('fs-jetpack').cwd(app.getAppPath());
var Vue = require('vue');
var mixin = require('../../mixins/mixins.js').mixin;
const timekeeper = require('../../js/timekeeper.js').timekeeper;

//var Datastore = require('nedb'), db = new Datastore({ filename: 'test.json', autoload: true });

console.log("Timer is " + timekeeper.active);
console.log("Timer delay " + timekeeper.timeLimit);

exports.statusbar = Vue.extend({
    data: function () {
        return {
            electronVersion: process.versions['electron'],
            timer: timekeeper.active,
            timerDelay: timekeeper.timeLimit
        }
    },
    template: jetpack.read('./components/shell/statusbar.vue.html'),
    methods: {

    },
    mixins: [mixin]
});