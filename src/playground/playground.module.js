import PlaygroundController from './playground.controller';

/**
 * define state ant match routing
 * @param stateProvider
 */
function playgroundConfig(stateProvider) {

    stateProvider
        .state('playground', {
            url: '/playground',
            controller: 'PlaygroundController as playground',
            templateUrl: 'playground/playground.tmpl.html'
        })
}

/**
 * digest module definition
 */
export default angular.module('playground', [
    'ui.router'
])
    .config(['$stateProvider', playgroundConfig])
    .controller('PlaygroundController', PlaygroundController);
