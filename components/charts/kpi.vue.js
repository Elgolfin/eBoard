const app = require('remote').require('app');
const jetpack = require('fs-jetpack').cwd(app.getAppPath());
var Vue = require('vue');
var Chart = require('../../js/Chart.min.js');
var kpi = require('../../js/kpi.js').kpi;

exports.kpi = Vue.extend({
    data: function () {
        return {
             
        }  
    },
    computed: {
        doughnutData: function () {
            return kpi.getDoughnutData(this.kpidata.actual, this.kpidata.greenTarget, this.kpidata.yellowTarget);
        },
        greenTarget: function () {
            return this.kpidata.greenTarget;
        },
        yellowTarget: function () {
            return this.kpidata.yellowTarget;
        },
        actual: {
            get: function() {
                return this.kpidata.actual;
            },
            set: function (newValue) {
                this.kpidata.actual = newValue;
            }
        },
        title: function () {
            return this.kpidata.title;
        },
        id: function () {
            return this.kpidata.id;
        },
        
        lineData: function () {
            return {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "Baseline",
                        fillColor: "rgba(220,220,220,0.1)",
                        strokeColor: "grey",
                        pointColor: "grey",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: [0, 0, 0, 0, 0, 0, 0]
                    },
                    {
                        label: "My First dataset",
                        fillColor: "rgba(220,220,220,0.1)",
                        strokeColor: "green",
                        pointColor: "green",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: [90, 90, 90, 90, 90, 90, 90]
                    },
                    {
                        label: "My First dataset",
                        fillColor: "rgba(220,220,220,0.1)",
                        strokeColor: "orange",
                        pointColor: "orange",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: [80, 80, 80, 80, 80, 80, 80]
                    },
                    {
                        label: "My Second dataset",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "coral",
                        pointColor: "coral",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            }
        }
        // */
    },
    props: {
        kpidata: {
            type: Object,
            required: true
        }
            /*
            default: function () {
                return { 
                    greenTarget: 90,
                    yellowTarget: 80,
                    actual: 75,
                    title: "My KPI",
                    id: "my-kpi",
                    lineData: null 
                }
            }
            // */
       // } 
    }
    ,template: jetpack.read('./components/charts/kpi.vue.html'),
    methods: {
        submit: function () {
            this.renderDoughnutChart();
        },
        renderDoughnutChart: function () {
            var chartCtx = document.getElementById("doughnut-" + this.id).getContext("2d");
            var chart = new Chart(chartCtx).Doughnut(this.doughnutData, {})
        },
        renderLineChart: function () {
            var chartCtx = document.getElementById("line-" + this.id).getContext("2d");
            var chart = new Chart(chartCtx).Line(this.lineData, {
                scaleShowGridLines : false,
                scaleShowHorizontalLines: false,
                scaleShowVerticalLines: false
            });
        }
    },
    ready: function(){
        this.renderDoughnutChart();
        this.renderLineChart();
    }
});

