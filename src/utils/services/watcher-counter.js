class WatcherCounter {

    /**
     * returns the amount of watchers on
     * a given scope
     *
     * @param scope
     * @returns {*}
     */
    count(scope) {

        let count = scope.$$watchers ? scope.$$watchers.length : 0; // include the current scope
        let pendingChildHeads = [scope.$$childHead];
        let currentScope;

        while (pendingChildHeads.length) {
            currentScope = pendingChildHeads.shift();

            while (currentScope) {
                count += currentScope.$$watchers ? currentScope.$$watchers.length : 0;
                pendingChildHeads.push(currentScope.$$childHead);
                currentScope = currentScope.$$nextSibling;
            }
        }

        return count;
    }
}

export default WatcherCounter;