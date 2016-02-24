const app = require('remote').require('app');
const jetpack = require('fs-jetpack').cwd(app.getAppPath());
var Vue = require('vue');

exports.image = Vue.extend({
    data: function () {
        return { 
            height: window.innerHeight,
            width: window.innerWidth,
            data: null
        }
    },
    computed: {
        url: function() {
            return this.data.src;   
        }        
    },
    template: jetpack.read('./components/panels/image.vue.html'),
    activate: function (done) {
        this.data = this.$root.viewData;
        done();
    }
});