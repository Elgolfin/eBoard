const app = require('remote').require('app');
const jetpack = require('fs-jetpack').cwd(app.getAppPath());
var Vue = require('vue');

exports.webview = Vue.extend({
    data: function () {
        return { 
            height: window.innerHeight,
            width: window.innerWidth,
            data: null
        }
    },
    computed: {
        url: function() {
            return this.data.url;   
        }        
    },
    template: jetpack.read('./components/panels/webview.vue.html'),
    activate: function (done) {
        this.data = this.$root.viewData;
        done();
    }
});