class DigestCounter {

    constructor($rootScope, $log) {
        this.unwatch = null;
        this.scope = $rootScope;
        this.logger = $log;
    }

    /**
     * log to console on each digest
     */
    setCounter() {
        this.unwatch = this.scope.$watch( ()=>
            this.logger.debug('digest!'))
    }

    /**
     * remove the watcher
     */
    stopCounter() {
        this.unwatch.call(this);
    }
}

export default DigestCounter;