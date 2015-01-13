System.register("../src/utils/directives/apply-button/apply-button.directive", [], function() {
  "use strict";
  var __moduleName = "../src/utils/directives/apply-button/apply-button.directive";
  function applyButtonDirective() {
    return {
      template: "<button class='btn btn-default'>$apply</button>",
      link: function(scope, element) {
        element.on('click', function() {
          scope.$root.time = new Date();
          scope.$apply();
        });
      }
    };
  }
  var $__default = applyButtonDirective;
  return {get default() {
      return $__default;
    }};
});
System.register("../src/utils/directives/apply-button/apply-button.module", [], function() {
  "use strict";
  var __moduleName = "../src/utils/directives/apply-button/apply-button.module";
  var applyButtonDirective = System.get("../src/utils/directives/apply-button/apply-button.directive").default;
  var $__default = angular.module('apply-button', []).directive('applyButton', applyButtonDirective);
  return {get default() {
      return $__default;
    }};
});
System.register("../src/utils/directives/digest-button/digest-button.directive", [], function() {
  "use strict";
  var __moduleName = "../src/utils/directives/digest-button/digest-button.directive";
  function digestButtonDirective() {
    return {
      template: "<button class='btn btn-default'>$digest</button>",
      link: function(scope, element) {
        element.on('click', function() {
          scope.$root.time = new Date();
          scope.$digest();
        });
      }
    };
  }
  var $__default = digestButtonDirective;
  return {get default() {
      return $__default;
    }};
});
System.register("../src/utils/directives/digest-button/digest-button.module", [], function() {
  "use strict";
  var __moduleName = "../src/utils/directives/digest-button/digest-button.module";
  var digestButtonDirective = System.get("../src/utils/directives/digest-button/digest-button.directive").default;
  var $__default = angular.module('digest-button', []).directive('digestButton', digestButtonDirective);
  return {get default() {
      return $__default;
    }};
});
System.register("../src/utils/directives/email-to/email-to.directive", [], function() {
  "use strict";
  var __moduleName = "../src/utils/directives/email-to/email-to.directive";
  function emailToDirective($log) {
    return {
      template: "<a ng-href='mailto:'+{{email}}>{{email}}</a>",
      link: function link(scope, element, attrs) {
        $log.debug('emailToDirective linked');
        scope.email = attrs.emailTo;
      }
    };
  }
  var $__default = emailToDirective;
  return {get default() {
      return $__default;
    }};
});
System.register("../src/utils/directives/email-to/email-to.module", [], function() {
  "use strict";
  var __moduleName = "../src/utils/directives/email-to/email-to.module";
  var emailToDirective = System.get("../src/utils/directives/email-to/email-to.directive").default;
  var $__default = angular.module('email-to', []).directive('emailTo', ['$log', emailToDirective]);
  return {get default() {
      return $__default;
    }};
});
System.register("../src/utils/directives/heavy-lifting/heavy-lifting.directive", [], function() {
  "use strict";
  var __moduleName = "../src/utils/directives/heavy-lifting/heavy-lifting.directive";
  function heavyLiftingDirective($log, FakeData) {
    return {
      templateUrl: "utils/directives/heavy-lifting/heavy-lifting.tmpl.html",
      compile: function compilePhase() {
        $log.debug('heavyLiftingDirective compiled');
        return function linkPhase(scope) {
          $log.debug('heavyLiftingDirective linked');
        };
      }
    };
  }
  var $__default = heavyLiftingDirective;
  return {get default() {
      return $__default;
    }};
});
System.register("../src/utils/directives/heavy-lifting/heavy-lifting.module", [], function() {
  "use strict";
  var __moduleName = "../src/utils/directives/heavy-lifting/heavy-lifting.module";
  var heavyLiftingDirective = System.get("../src/utils/directives/heavy-lifting/heavy-lifting.directive").default;
  var $__default = angular.module('heavy-lifting', []).directive('heavyLifting', ['$log', 'FakeData', heavyLiftingDirective]);
  return {get default() {
      return $__default;
    }};
});
System.register("../src/utils/directives/on-compile-complete/on-compile-complete.directive", [], function() {
  "use strict";
  var __moduleName = "../src/utils/directives/on-compile-complete/on-compile-complete.directive";
  function onCompileComplete() {
    return {
      restrict: 'A',
      priority: 9009,
      scope: {onCompileComplete: "&"},
      link: function(scope) {
        scope.onCompileComplete();
      }
    };
  }
  var $__default = onCompileComplete;
  return {get default() {
      return $__default;
    }};
});
System.register("../src/utils/directives/on-compile-complete/on-compile-complete.module", [], function() {
  "use strict";
  var __moduleName = "../src/utils/directives/on-compile-complete/on-compile-complete.module";
  var onCompileComplete = System.get("../src/utils/directives/on-compile-complete/on-compile-complete.directive").default;
  var $__default = angular.module('on-compile-complete', []).directive('onCompileComplete', onCompileComplete);
  return {get default() {
      return $__default;
    }};
});
System.register("../src/utils/directives/panel-widget/Panel-widget.controller", [], function() {
  "use strict";
  var __moduleName = "../src/utils/directives/panel-widget/Panel-widget.controller";
  var PanelWidgetController = function PanelWidgetController($element) {
    $element.find('.panel-heading').on('click', function() {
      $element.find('.panel-body').toggle();
    });
  };
  ($traceurRuntime.createClass)(PanelWidgetController, {}, {});
  var $__default = PanelWidgetController;
  return {get default() {
      return $__default;
    }};
});
System.register("../src/utils/directives/panel-widget/panel-widget.directive", [], function() {
  "use strict";
  var __moduleName = "../src/utils/directives/panel-widget/panel-widget.directive";
  function PanelWidgetDirective() {
    return {
      restrict: 'E',
      templateUrl: 'utils/directives/panel-widget/panel-widget.tmpl.html',
      controller: 'PanelWidgetController as panel'
    };
  }
  var $__default = PanelWidgetDirective;
  return {get default() {
      return $__default;
    }};
});
System.register("../src/utils/directives/panel-widget/panel-widget.module", [], function() {
  "use strict";
  var __moduleName = "../src/utils/directives/panel-widget/panel-widget.module";
  var panelWidgetDirective = System.get("../src/utils/directives/panel-widget/panel-widget.directive").default;
  var PanelWidgetController = System.get("../src/utils/directives/panel-widget/Panel-widget.controller").default;
  var $__default = angular.module('panel-widget', []).controller('PanelWidgetController', ['$element', PanelWidgetController]).directive('panelWidget', panelWidgetDirective);
  return {get default() {
      return $__default;
    }};
});
System.register("../src/utils/directives/utils-directives.module", [], function() {
  "use strict";
  var __moduleName = "../src/utils/directives/utils-directives.module";
  var heavyLifting = System.get("../src/utils/directives/heavy-lifting/heavy-lifting.module").default;
  var panelWidget = System.get("../src/utils/directives/panel-widget/panel-widget.module").default;
  var onCompileComplete = System.get("../src/utils/directives/on-compile-complete/on-compile-complete.module").default;
  var emailTo = System.get("../src/utils/directives/email-to/email-to.module").default;
  var digestButton = System.get("../src/utils/directives/digest-button/digest-button.module").default;
  var applyButton = System.get("../src/utils/directives/apply-button/apply-button.module").default;
  var $__default = angular.module('utils-directives', ['heavy-lifting', 'panel-widget', 'on-compile-complete', 'email-to', 'digest-button', 'apply-button']);
  return {get default() {
      return $__default;
    }};
});
System.register("../src/utils/services/digest-counter", [], function() {
  "use strict";
  var __moduleName = "../src/utils/services/digest-counter";
  var DigestCounter = function DigestCounter($rootScope, $log) {
    this.unwatch = null;
    this.scope = $rootScope;
    this.logger = $log;
  };
  ($traceurRuntime.createClass)(DigestCounter, {
    setCounter: function() {
      var $__14 = this;
      this.unwatch = this.scope.$watch((function() {
        return $__14.logger.debug('digest!');
      }));
    },
    stopCounter: function() {
      this.unwatch.call(this);
    }
  }, {});
  var $__default = DigestCounter;
  return {get default() {
      return $__default;
    }};
});
System.register("../src/utils/services/fake-data", [], function() {
  "use strict";
  var __moduleName = "../src/utils/services/fake-data";
  var FakeData = function FakeData($timeout) {
    this.timeout = $timeout;
  };
  ($traceurRuntime.createClass)(FakeData, {
    getFakeData: function(length) {
      var data = [];
      while (length--) {
        data.push(faker.helpers.createCard());
      }
      return data;
    },
    getFakeDataAsync: function(length) {
      var $__16 = this;
      return this.timeout((function() {
        return $__16.getFakeData(length);
      }), 500);
    }
  }, {});
  var $__default = FakeData;
  return {get default() {
      return $__default;
    }};
});
System.register("../src/utils/services/watcher-counter", [], function() {
  "use strict";
  var __moduleName = "../src/utils/services/watcher-counter";
  var WatcherCounter = function WatcherCounter() {};
  ($traceurRuntime.createClass)(WatcherCounter, {count: function(scope) {
      var count = scope.$$watchers ? scope.$$watchers.length : 0;
      var pendingChildHeads = [scope.$$childHead];
      var currentScope;
      while (pendingChildHeads.length) {
        currentScope = pendingChildHeads.shift();
        while (currentScope) {
          count += currentScope.$$watchers ? currentScope.$$watchers.length : 0;
          pendingChildHeads.push(currentScope.$$childHead);
          currentScope = currentScope.$$nextSibling;
        }
      }
      return count;
    }}, {});
  var $__default = WatcherCounter;
  return {get default() {
      return $__default;
    }};
});
System.register("../src/utils/services/utils-services.module", [], function() {
  "use strict";
  var __moduleName = "../src/utils/services/utils-services.module";
  var DigestCounter = System.get("../src/utils/services/digest-counter").default;
  var FakeData = System.get("../src/utils/services/fake-data").default;
  var WatcherCounter = System.get("../src/utils/services/watcher-counter").default;
  var $__default = angular.module('utils-services', []).service('DigestCounter', ['$rootScope', '$log', DigestCounter]).service('FakeData', ['$timeout', FakeData]).service('WatcherCounter', WatcherCounter);
  return {get default() {
      return $__default;
    }};
});
System.register("../src/utils/utils.module", [], function() {
  "use strict";
  var __moduleName = "../src/utils/utils.module";
  var utilsServices = System.get("../src/utils/services/utils-services.module").default;
  var utilsDirectives = System.get("../src/utils/directives/utils-directives.module").default;
  var $__default = angular.module('utils', ['utils-services', 'utils-directives']);
  return {get default() {
      return $__default;
    }};
});
System.register("../src/compile/compile.controller", [], function() {
  "use strict";
  var __moduleName = "../src/compile/compile.controller";
  var CompileController = function CompileController() {};
  ($traceurRuntime.createClass)(CompileController, {}, {});
  var $__default = CompileController;
  return {get default() {
      return $__default;
    }};
});
System.register("../src/compile/compile.module", [], function() {
  "use strict";
  var __moduleName = "../src/compile/compile.module";
  var Utils = System.get("../src/utils/utils.module").default;
  var CompileController = System.get("../src/compile/compile.controller").default;
  function compileConfig(stateProvider) {
    stateProvider.state('compile', {
      url: '/compile',
      controller: 'CompileController as compile',
      templateUrl: 'compile/compile.tmpl.html'
    });
  }
  var $__default = angular.module('compile', ['ui.router', 'utils']).config(['$stateProvider', compileConfig]).controller('CompileController', ['$rootScope', CompileController]);
  return {get default() {
      return $__default;
    }};
});
System.register("../src/digest/digest.controller", [], function() {
  "use strict";
  var __moduleName = "../src/digest/digest.controller";
  var DigestController = function DigestController($scope, DigestConuter, WatcherCounter, FakeData) {
    this.scope = $scope;
    this.watcherCounter = WatcherCounter;
    this.watchers = null;
    this.panelVisiable = false;
    this.persons = FakeData.getFakeData(5);
    DigestConuter.setCounter();
  };
  ($traceurRuntime.createClass)(DigestController, {
    togglePanel: function() {
      this.panelVisiable = !this.panelVisiable;
    },
    getModelOptions: function() {
      return {
        debounce: {
          "default": 400,
          blur: 200
        },
        updateOn: 'blur'
      };
    },
    countWatchers: function() {
      this.watchers = this.watcherCounter.count(this.scope);
    }
  }, {});
  var $__default = DigestController;
  return {get default() {
      return $__default;
    }};
});
System.register("../src/digest/digest.module", [], function() {
  "use strict";
  var __moduleName = "../src/digest/digest.module";
  var DigestController = System.get("../src/digest/digest.controller").default;
  function digestConfig(stateProvider) {
    stateProvider.state('digest', {
      url: '/digest',
      controller: 'DigestController as digest',
      templateUrl: 'digest/digest.tmpl.html'
    });
  }
  var $__default = angular.module('digest', ['ui.router']).config(['$stateProvider', digestConfig]).controller('DigestController', ['$scope', 'DigestCounter', 'WatcherCounter', 'FakeData', DigestController]);
  return {get default() {
      return $__default;
    }};
});
System.register("../src/playground/playground.controller", [], function() {
  "use strict";
  var __moduleName = "../src/playground/playground.controller";
  var PlaygroundController = function PlaygroundController() {};
  ($traceurRuntime.createClass)(PlaygroundController, {}, {});
  var $__default = PlaygroundController;
  return {get default() {
      return $__default;
    }};
});
System.register("../src/playground/playground.module", [], function() {
  "use strict";
  var __moduleName = "../src/playground/playground.module";
  var PlaygroundController = System.get("../src/playground/playground.controller").default;
  function playgroundConfig(stateProvider) {
    stateProvider.state('playground', {
      url: '/playground',
      controller: 'PlaygroundController as playground',
      templateUrl: 'playground/playground.tmpl.html'
    });
  }
  var $__default = angular.module('playground', ['ui.router']).config(['$stateProvider', playgroundConfig]).controller('PlaygroundController', PlaygroundController);
  return {get default() {
      return $__default;
    }};
});
System.register("../src/production/exception-handler.decorator", [], function() {
  "use strict";
  var __moduleName = "../src/production/exception-handler.decorator";
  function exceptionHandlerDecorator($delegate, $log) {
    $delegate = function(excpetion, couse) {
      $log.log('caught you!');
    };
    return $delegate;
  }
  var $__default = exceptionHandlerDecorator;
  return {get default() {
      return $__default;
    }};
});
System.register("../src/production/production.module", [], function() {
  "use strict";
  var __moduleName = "../src/production/production.module";
  var exceptionHandlerDecorator = System.get("../src/production/exception-handler.decorator").default;
  function productionConfig($provide, $logProvider, $compileProvider) {
    $provide.decorator('$exceptionHandler', exceptionHandlerDecorator);
    $logProvider.debugEnabled(false);
    $compileProvider.debugInfoEnabled(false);
  }
  var $__default = angular.module('production', []).config(['$provide', '$logProvider', '$compileProvider', productionConfig]);
  return {get default() {
      return $__default;
    }};
});
System.register("../src/repeater/repeater.controller", [], function() {
  "use strict";
  var __moduleName = "../src/repeater/repeater.controller";
  var RepeaterController = function RepeaterController($scope, $log, WatcherCounter, FakeData) {
    this.scope = $scope;
    this.watcherCounter = WatcherCounter;
    this.fakeData = FakeData;
    this.logger = $log;
    this.workers = [];
    this.asyncWorkers = [];
    this.filterdWorkers = [];
    this.watchers = null;
  };
  ($traceurRuntime.createClass)(RepeaterController, {
    getData: function() {
      this.workers = this.fakeData.getFakeData(1000);
    },
    getAsyncData: function() {
      var $__30 = this;
      this.fakeData.getFakeDataAsync(500).then((function(result) {
        return $__30.asyncWorkers = result;
      }));
    },
    getFilterdData: function() {
      this.filterdWorkers = this.fakeData.getFakeData(50);
    },
    refreshData: function() {
      var newWorkers = angular.copy(this.workers);
      newWorkers.map((function(person) {
        return person.name = person.name.toUpperCase();
      }));
      this.workers = newWorkers;
    },
    countWatchers: function() {
      this.watchers = this.watcherCounter.count(this.scope);
    }
  }, {});
  var $__default = RepeaterController;
  return {get default() {
      return $__default;
    }};
});
System.register("../src/repeater/repeater.module", [], function() {
  "use strict";
  var __moduleName = "../src/repeater/repeater.module";
  var RepeaterController = System.get("../src/repeater/repeater.controller").default;
  function repeaterConfig(stateProvider) {
    stateProvider.state('repeater', {
      url: '/repeater',
      controller: 'RepeaterController as repeater',
      templateUrl: 'repeater/repeater.tmpl.html'
    });
  }
  var $__default = angular.module('repeater', ['ui.router']).config(['$stateProvider', repeaterConfig]).controller('RepeaterController', ['$scope', '$log', 'WatcherCounter', 'FakeData', RepeaterController]);
  return {get default() {
      return $__default;
    }};
});
System.register("../src/welcome/welcome.controller", [], function() {
  "use strict";
  var __moduleName = "../src/welcome/welcome.controller";
  var WelcomeController = function WelcomeController($state) {
    this.state = $state;
  };
  ($traceurRuntime.createClass)(WelcomeController, {start: function() {
      this.state.go('compile');
    }}, {});
  var $__default = WelcomeController;
  return {get default() {
      return $__default;
    }};
});
System.register("../src/welcome/welcome.module", [], function() {
  "use strict";
  var __moduleName = "../src/welcome/welcome.module";
  var WelcomeController = System.get("../src/welcome/welcome.controller").default;
  function welcomeConfig($stateProvider) {
    $stateProvider.state('welcome', {
      url: '/welcome',
      templateUrl: 'welcome/welcome.tmpl.html',
      controller: 'WelcomeController as welcome'
    });
  }
  var $__default = angular.module('welcome', ['ui.router']).config(['$stateProvider', welcomeConfig]).controller('WelcomeController', ['$state', WelcomeController]);
  return {get default() {
      return $__default;
    }};
});
System.register("../src/main.module", [], function() {
  "use strict";
  var __moduleName = "../src/main.module";
  var Util = System.get("../src/utils/utils.module").default;
  var Digest = System.get("../src/digest/digest.module").default;
  var Welcome = System.get("../src/welcome/welcome.module").default;
  var Compile = System.get("../src/compile/compile.module").default;
  var PlayGround = System.get("../src/playground/playground.module").default;
  var Repeater = System.get("../src/repeater/repeater.module").default;
  var Production = System.get("../src/production/production.module").default;
  angular.module('main', ['ui.bootstrap', 'utils', 'digest', 'welcome', 'compile', 'playground', 'repeater']);
  angular.element(document).ready((function() {
    return angular.bootstrap(document, ['main']);
  }));
  return {};
});
System.get("../src/main.module" + '');
