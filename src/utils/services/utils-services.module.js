import DigestCounter from './digest-counter';
import FakeData from './fake-data';
import WatcherCounter from './watcher-counter'

/**
 * utils module definition
 */
export default angular.module('utils-services', [])
    .service('DigestCounter', ['$rootScope','$log',DigestCounter])
    .service('FakeData', ['$timeout',FakeData])
    .service('WatcherCounter', WatcherCounter)