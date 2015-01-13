import exceptionHandlerDecorator from './exception-handler.decorator';

/**
 * production module configuration
 *
 * @param $provide
 * @param $logProvider
 * @param $compileProvider
 */
function productionConfig($provide, $logProvider, $compileProvider) {
    $provide.decorator('$exceptionHandler',exceptionHandlerDecorator);
    $logProvider.debugEnabled(false);
    $compileProvider.debugInfoEnabled(false);
}

/**
 * production module definition
 */
export default angular.module('production', [])
    .config(['$provide','$logProvider','$compileProvider', productionConfig])
