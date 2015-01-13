/**
 * invoke a method on the scope on linking
 *
 * @returns {{restrict: string, priority: number, scope: {onCompileComplete: string}, link: Function}}
 */
function onCompileComplete () {
    return {
        restrict: 'A',
        priority: 9009,
        scope : {onCompileComplete: "&"},
        link: function (scope){
            scope.onCompileComplete();
        }
    }
}

export default onCompileComplete;