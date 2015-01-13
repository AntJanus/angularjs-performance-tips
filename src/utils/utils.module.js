import utilsServices from './services/utils-services.module';
import utilsDirectives from './directives/utils-directives.module';

/**
 * utils module definition
 */
export default angular.module('utils', [
    'utils-services',
    'utils-directives'
])
