const app = require('remote').require('app');
const jetpack = require('fs-jetpack').cwd(app.getAppPath());
var Vue = require('vue');

exports.comp1 = Vue.extend({
    data: function () {
        return { 
            title: "comp1 title",
            height: window.innerHeight,
            width: window.innerWidth 
        }
    },
    template: jetpack.read('./components/test/comp1.vue.html')
});