import panelWidgetDirective from './panel-widget.directive';
import PanelWidgetController from './Panel-widget.controller';

/**
 * digest-directives module definition
 */
export default angular.module('panel-widget', [])
    .controller('PanelWidgetController', ['$element',PanelWidgetController])
    .directive('panelWidget', panelWidgetDirective);