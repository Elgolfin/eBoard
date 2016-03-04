const Vue = require('vue');

// Load all components
const sidebar = require('../components/shell/sidebar.vue.js').sidebar;
//const statusbar = require('../components/shell/statusbar.vue.js').statusbar;
const mainGraph = require('../components/charts/main.vue.js').main;
const webview = require('../components/panels/webview.vue.js').webview;
const image = require('../components/panels/image.vue.js').image;
const kpis = require('../components/charts/kpis.vue.js').kpis;

// Mixins
const mixin = require('../mixins/mixins.js').mixin;

// Register components
exports.mainVM = new Vue({
    el: 'body',
    data: {
        currentView: 'image',
        viewData: null
    },
    components: {
        comp4ybSidebar: sidebar,
        //comp4ybStatusbar: statusbar,
        webview: webview,
        image: image,
        kpis: kpis
    },
    methods: {
        
    },
    mixins: [mixin]
});