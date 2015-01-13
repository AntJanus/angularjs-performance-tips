import Util from './utils/utils.module';
import Digest from './digest/digest.module';
import Welcome from './welcome/welcome.module';
import Compile from './compile/compile.module';
import PlayGround from './playground/playground.module';
import Repeater from './repeater/repeater.module';
import Production from './production/production.module';

/**
 * main module definition
 */
angular.module('main', [
    'ui.bootstrap',
    'utils',
    'digest',
    'welcome',
    'compile',
    'playground',
    'repeater'
    //'production',
    //'templates'
]);


angular.element(document)
    .ready(() => angular.bootstrap(document, ['main']));