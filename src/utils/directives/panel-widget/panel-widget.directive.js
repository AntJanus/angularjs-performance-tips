/**
 * render a bootstrap styled panel component
 * that can be toggled on click
 *
 * @returns {{restrict: string, templateUrl: string, controller: string, bindToController: boolean}}
 * @constructor
 */
function PanelWidgetDirective() {
    return {
        restrict: 'E',
        templateUrl: 'utils/directives/panel-widget/panel-widget.tmpl.html',
        controller: 'PanelWidgetController as panel'
    }
}

export default PanelWidgetDirective;


