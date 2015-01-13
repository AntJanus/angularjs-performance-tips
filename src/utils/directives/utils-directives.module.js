import heavyLifting from './heavy-lifting/heavy-lifting.module';
import panelWidget from './panel-widget/panel-widget.module';
import onCompileComplete from './on-compile-complete/on-compile-complete.module';
import emailTo from './email-to/email-to.module';
import digestButton from './digest-button/digest-button.module';
import applyButton from './apply-button/apply-button.module';

/**
 * utils module definition
 */
export default angular.module('utils-directives', [
    'heavy-lifting',
    'panel-widget',
    'on-compile-complete',
    'email-to',
    'digest-button',
    'apply-button'
])
