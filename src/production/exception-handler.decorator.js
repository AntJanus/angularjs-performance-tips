/**
 * override angularJS exception handler with
 * another implementation
 *
 * @desc decorate
 * @param $delegate
 * @param $log
 * @returns {Function}
 */
function exceptionHandlerDecorator($delegate, $log) {

    $delegate = function (excpetion, couse) {
        $log.log('caught you!')
    };

    return $delegate
}

export default exceptionHandlerDecorator;