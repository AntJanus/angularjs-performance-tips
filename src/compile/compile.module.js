import Utils from '../utils/utils.module';
import CompileController from './compile.controller';

/**
 * define state ant match routing
 * @param stateProvider
 */
function compileConfig(stateProvider) {

    stateProvider
        .state('compile', {
            url: '/compile',
            controller : 'CompileController as compile',
            templateUrl: 'compile/compile.tmpl.html'
        })
}

/**
 * compile module definition
 */
export default angular.module('compile', ['ui.router', 'utils'])
    .config(['$stateProvider', compileConfig])
    .controller('CompileController',['$rootScope', CompileController])