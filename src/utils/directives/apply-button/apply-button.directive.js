/**
 * simple directive that render s button that calls
 * scope.$apply on click
 *
 * @returns {{template: string, link: Function}}
 */
function applyButtonDirective() {

    return {
        template: "<button class='btn btn-default'>$apply</button>",
        link: function (scope, element) {
            element.on('click', function () {
                scope.$root.time = new Date();
                scope.$apply();
            })
        }
    }
}

export default applyButtonDirective;