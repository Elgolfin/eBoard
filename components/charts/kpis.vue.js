const app = require('remote').require('app');
const jetpack = require('fs-jetpack').cwd(app.getAppPath());
const kpi = require('./kpi.vue.js').kpi;
var Vue = require('vue');

exports.kpis = Vue.extend({
    data: function () {
        return {
            kpis: jetpack.read('./components/charts/kpis.json','json')
        }  
    },
    template: jetpack.read('./components/charts/kpis.vue.html'),
    ready: function(){
        
    }
});
