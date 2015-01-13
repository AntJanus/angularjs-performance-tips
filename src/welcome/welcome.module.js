import WelcomeController from './welcome.controller';
/**
 * define state ant match routing
 * @param $stateProvider
 */
function welcomeConfig ($stateProvider) {

    $stateProvider
        .state('welcome', {
            url: '/welcome',
            templateUrl: 'welcome/welcome.tmpl.html',
            controller: 'WelcomeController as welcome'
        })
}

export default angular.module('welcome', ['ui.router'])
    .config(['$stateProvider', welcomeConfig])
    .controller('WelcomeController',['$state', WelcomeController]);