import RepeaterController from './repeater.controller';

/**
 * define state ant match routing
 * @param stateProvider
 */
function repeaterConfig(stateProvider) {

    stateProvider
        .state('repeater', {
            url: '/repeater',
            controller: 'RepeaterController as repeater',
            templateUrl: 'repeater/repeater.tmpl.html'
        })
}

/**
 * repeater module definition
 */
export default angular.module('repeater', [
    'ui.router'
])
    .config(['$stateProvider', repeaterConfig])
    .controller('RepeaterController', ['$scope','$log','WatcherCounter','FakeData',RepeaterController]);
