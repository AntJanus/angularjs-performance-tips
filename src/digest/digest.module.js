import DigestController from './digest.controller';

/**
 * define state ant match routing
 * @param stateProvider
 */
function digestConfig(stateProvider) {

    stateProvider
        .state('digest', {
            url: '/digest',
            controller: 'DigestController as digest',
            templateUrl: 'digest/digest.tmpl.html'
        })
}

/**
 * digest module definition
 */
export default angular.module('digest', [
    'ui.router'
])
    .config(['$stateProvider', digestConfig])
    .controller('DigestController', ['$scope','DigestCounter', 'WatcherCounter', 'FakeData', DigestController]);
