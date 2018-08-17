import MenuView from './MenuView';


export default class DropDown extends MenuView {
    constructor(selector, config) {
        super(selector, config);

        config = {
            timeout: -1,
            closeOnSelect: true,
            activateEvent: 'click',
            toggle: 'click'
        };

        config = Object.assign(config, this.$element.data());
        this.$element.data(config);
    }
}
