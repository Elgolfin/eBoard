const app = require('remote').require('app');
const jetpack = require('fs-jetpack').cwd(app.getAppPath());
const kpi = require('./kpi.vue.js').kpi;
var Vue = require('vue');

exports.kpis = Vue.extend({
    data: function () {
        return {
            // TODO: dynamically load the kpis from a json file
            kpis: jetpack.read('./components/charts/kpis.json','json')
            /*kpis: [
                {
                    greenTarget: 80,
                    yellowTarget: 60,
                    actual: 75,
                    title: "My KPI 1",
                    id: "my-kpi1",
                    lineData: null
                },
                {
                    greenTarget: 90,
                    yellowTarget: 80,
                    actual: 79,
                    title: "My KPI 2",
                    id: "my-kpi2",
                    lineData: null
                },
                {
                    greenTarget: 95,
                    yellowTarget: 90,
                    actual: 50,
                    title: "My KPI 3",
                    id: "my-kpi3",
                    lineData: null
                }
            ]    
            //*/
        }  
    },
    template: jetpack.read('./components/charts/kpis.vue.html'),
    ready: function(){
        
    }
});
