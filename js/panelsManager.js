const app = require('remote').require('app');
const jetpack = require('fs-jetpack').cwd(app.getAppPath());
const timekeeper = require('./timekeeper.js').timekeeper;

exports.panelsManager = {
    changeView: function myFunc(viewModel) {
        var i = 0;
        var panels = jetpack.read('./components/shell/sidebar.vue.json','json');
        timekeeper.active = true;
        timekeeper.activate(function(){
            viewModel.currentView = panels[i].view;
            viewModel.viewData = panels[i];
            viewModel.$broadcast("changeView", panels[i]);
            i++;
            if (i >= panels.length) {
                i = 0;
            }
        });
    }
};