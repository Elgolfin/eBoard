const app = require('remote').require('app');
const jetpack = require('fs-jetpack').cwd(app.getAppPath());
var Vue = require('vue');

exports.dashboard = Vue.extend({
    data: function () {
        return { title: "Dashboard"}
    },
    template: jetpack.read('./components/dashboard/dashboard.vue.html')
});