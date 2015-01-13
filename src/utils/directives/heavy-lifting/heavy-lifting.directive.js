/**
 * used for demonstration purpose, logs when
 * compiled and linked. the FakeData can be use
 * to simulate a long process script.
 *
 * @param $log
 * @param FakeData
 * @returns {{templateUrl: string, compile: Function}}
 */
function heavyLiftingDirective ($log, FakeData) {
    return {
        templateUrl: "utils/directives/heavy-lifting/heavy-lifting.tmpl.html",
        compile: function compilePhase () {
            $log.debug('heavyLiftingDirective compiled');
            return function linkPhase (scope) {
                //scope.data = FakeData.getFakeData(1000);
                $log.debug('heavyLiftingDirective linked');
            }
        }
    }
}

export default heavyLiftingDirective;