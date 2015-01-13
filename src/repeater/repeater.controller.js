class RepeaterController {

    constructor($scope, $log, WatcherCounter, FakeData) {
        this.scope = $scope;
        this.watcherCounter = WatcherCounter;
        this.fakeData = FakeData;
        this.logger = $log;
        this.workers = [];
        this.asyncWorkers = [];
        this.filterdWorkers = [];
        this.watchers = null;
    }

    getData() {
        this.workers = this.fakeData.getFakeData(1000);
    }

    getAsyncData(){
        this.fakeData.getFakeDataAsync(500).then((result)=> this.asyncWorkers = result);
    }

    getFilterdData(){
        this.filterdWorkers = this.fakeData.getFakeData(50);
    }

    refreshData() {
        let newWorkers = angular.copy(this.workers);
        newWorkers.map((person) => person.name = person.name.toUpperCase());
        this.workers = newWorkers;
    }

    countWatchers() {
        this.watchers = this.watcherCounter.count(this.scope);
    }

}

export default RepeaterController;
