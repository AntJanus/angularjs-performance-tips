/**
 * render a button that calls $scope.$digest on click
 *
 * @returns {{template: string, link: Function}}
 */
function digestButtonDirective() {

    return {
        template: "<button class='btn btn-default'>$digest</button>",
        link: function (scope, element) {
            element.on('click', function () {
                scope.$root.time = new Date();
                scope.$digest();
            })
        }
    }
}

export default digestButtonDirective;