/**
 * render a 'mailto' link from a giving
 * email address
 *
 * @param $log
 * @returns {{template: string, link: Function}}
 */
function emailToDirective($log) {
    return {
        template: "<a ng-href='mailto:'+{{email}}>{{email}}</a>",
        link: function link(scope, element, attrs) {
            $log.debug('emailToDirective linked');
            scope.email = attrs.emailTo;
        }
    }
}

export default emailToDirective;