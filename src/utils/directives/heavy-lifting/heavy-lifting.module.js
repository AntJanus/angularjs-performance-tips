import heavyLiftingDirective from './heavy-lifting.directive';

/**
 * digest-directives module definition
 */
export default angular.module('heavy-lifting', [])
    .directive('heavyLifting', ['$log','FakeData', heavyLiftingDirective]);

