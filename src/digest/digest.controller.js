class DigestController {

    constructor($scope, DigestConuter,WatcherCounter,FakeData) {
        this.scope = $scope;
        this.watcherCounter = WatcherCounter;
        this.watchers = null;
        this.panelVisiable = false;
        this.persons = FakeData.getFakeData(5);

        DigestConuter.setCounter();
    }

    togglePanel() {
        this.panelVisiable = !this.panelVisiable;
    }

    /**
     * set options for the ng-model-options directive
     * @returns {{debounce: {default: number, blur: number}, updateOn: string}}
     */
    getModelOptions() {
        return {
            debounce: {"default": 400, blur: 200},
            updateOn: 'blur'
        }
    }


    countWatchers() {
        this.watchers = this.watcherCounter.count(this.scope);
    }
}

export default DigestController;