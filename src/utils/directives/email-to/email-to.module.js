import emailToDirective from './email-to.directive';

/**
 * digest-directives module definition
 */
export default angular.module('email-to', [])
    .directive('emailTo', ['$log',emailToDirective]);