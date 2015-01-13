/**
 * controller for the panelWidget directive.
 * toggle visibility of the panel without registering
 * a watcher on the scope
 *
 */
class PanelWidgetController {

    constructor($element) {

        $element.find('.panel-heading')
            .on('click', function () {
             $element.find('.panel-body').toggle();
        })
    }
}

export default PanelWidgetController;