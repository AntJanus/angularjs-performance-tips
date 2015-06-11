(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("compile/compile.tmpl.html",
    "<div class=\"page-header\">\n" +
    "    <h1>Optimize Compile</h1>\n" +
    "</div>\n" +
    "\n" +
    "<!-- 'heavy' directive that takes time to load -->\n" +
    "<div heavy-lifting></div>");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("digest/digest.tmpl.html",
    "<div class=\"page-header\">\n" +
    "\n" +
    "    <h1>Optimizing the digest cycle\n" +
    "            <span class=\"lead pull-right\" ng-if=\"digest.watchers\">\n" +
    "            watchers count:\n" +
    "            <strong class=\"label label-danger\" ng-bind=\"digest.watchers\">\n" +
    "            </strong>\n" +
    "        </span>\n" +
    "    </h1>\n" +
    "\n" +
    "    <button type=\"button\"\n" +
    "            ng-click=\"digest.countWatchers()\"\n" +
    "            class=\"btn btn-default\">\n" +
    "        count watchers\n" +
    "    </button>\n" +
    "\n" +
    "    <button type=\"button\"\n" +
    "            ng-click=\"digest.stopCounter()\"\n" +
    "            class=\"btn btn-default\">\n" +
    "        reset digest counter\n" +
    "    </button>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "\n" +
    "    <tabset>\n" +
    "        <tab heading=\"ngModel\">\n" +
    "            <div class=\"well-lg\">\n" +
    "                <form class=\"form-horizontal\">\n" +
    "                    <div class=\"col-md-10\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <input type=\"text\"\n" +
    "                                   ng-model=\"some.value\"\n" +
    "                                   ng-model-options=\"digest.getModelOptions()\"\n" +
    "                                   class=\"form-control input-lg\"\n" +
    "                                   placeholder=\"type something..\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </tab>\n" +
    "\n" +
    "        <tab heading=\"Dom Manipulation\">\n" +
    "            <div class=\"well-lg\">\n" +
    "\n" +
    "                <!-- a panel widget that register watcher on the scope  -->\n" +
    "                <!--<div class=\"panel panel-primary\">-->\n" +
    "                    <!--<div class=\"panel-heading\" ng-click=\"digest.togglePanel()\">I'm the panel heading!</div>-->\n" +
    "                    <!--<div class=\"panel-body\" ng-show=\"digest.panelVisiable\">-->\n" +
    "                        <!--<p>Should we really need to add watcher just to make this widget work?</p>-->\n" +
    "                    <!--</div>-->\n" +
    "                <!--</div>-->\n" +
    "\n" +
    "                <!--<panel-widget></panel-widget>-->\n" +
    "\n" +
    "            </div>\n" +
    "        </tab>\n" +
    "\n" +
    "        <tab heading=\"Digest vs apply\">\n" +
    "            <div class=\"well-lg\">\n" +
    "\n" +
    "            <h2>Page scope: {{ time | date:'ss' }}</h2>\n" +
    "\n" +
    "            <div ng-if=\"true\">\n" +
    "                <h3>Inner scope: {{ time | date:'ss'}}</h3>\n" +
    "\n" +
    "                <div ng-include=\" 'partials/digest-buttons.tmpl.html' \"></div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </tab>\n" +
    "\n" +
    "        <tab heading=\"one-time binding\">\n" +
    "            <div class=\"well well-lg\">\n" +
    "\n" +
    "                <!-- use on-time-binding and look at watchers count -->\n" +
    "                <ul class=\"list-unstyled\" ng-repeat=\"person in digest.persons\">\n" +
    "                    <li><h2>      {{ person.name }}</h2></li>\n" +
    "                    <li>username: {{ person.username }}</li>\n" +
    "                    <li>email:    {{ person.email }}</li>\n" +
    "                    <li>phone:    {{ person.phone }}</li>\n" +
    "                    <li>website:  {{ person.website }}</li>\n" +
    "                    <li>city:     {{ person.address.city }}</li>\n" +
    "                    <li>state:    {{ person.address.state }}</li>\n" +
    "                    <li>country:  {{ person.address.country }}</li>\n" +
    "                    <li>zipcode:  {{ person.address.zipcode }}</li>\n" +
    "                </ul>\n" +
    "\n" +
    "            </div>\n" +
    "        </tab>\n" +
    "\n" +
    "    </tabset>\n" +
    "\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("partials/digest-buttons.tmpl.html",
    "<h4>ngInclude Scope: {{ time | date:'ss' }}</h4>\n" +
    "\n" +
    "<digest-button></digest-button>\n" +
    "<apply-button></apply-button>");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("partials/navbar.tmpl.html",
    "<nav class=\"navbar navbar-default\">\n" +
    "\n" +
    "    <div class=\"container\">\n" +
    "\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <a class=\"navbar-brand\" ui-sref=\"welcome\">AngularJS-IL</a>\n" +
    "        </div>\n" +
    "\n" +
    "        <ul class=\"nav navbar-nav\">\n" +
    "            <li><a ui-sref=\"welcome\">Welcome</a></li>\n" +
    "            <li><a ui-sref=\"compile\">Compile</a></li>\n" +
    "            <li><a ui-sref=\"digest\">Digest</a></li>\n" +
    "            <li><a ui-sref=\"repeater\">Repeater</a></li>\n" +
    "            <li><a ui-sref=\"playground\">playground</a></li>\n" +
    "        </ul>\n" +
    "\n" +
    "        <a class=\"navbar-text navbar-right\" href=\"mailto:Nir@500tech.com\">Nir@500tech.com</a>\n" +
    "\n" +
    "    </div>\n" +
    "</nav>");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("playground/playground.tmpl.html",
    "<div class=\"page-header\">\n" +
    "    <h1>Playground - just for testing stuff</h1>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("repeater/repeater.tmpl.html",
    "<div class=\"page-header\">\n" +
    "\n" +
    "    <h1>Optimize ngRepeat\n" +
    "        <span class=\"lead pull-right\" ng-if=\"repeater.watchers\">\n" +
    "            watchers count:\n" +
    "            <strong class=\"label label-danger\" ng-bind=\"repeater.watchers\">\n" +
    "            </strong>\n" +
    "        </span>\n" +
    "    </h1>\n" +
    "\n" +
    "    <button type=\"button\"\n" +
    "            ng-click=\"repeater.countWatchers()\"\n" +
    "            class=\"btn btn-default\">count watchers\n" +
    "    </button>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<tabset>\n" +
    "\n" +
    "    <tab heading=\"trackBy\">\n" +
    "        <div class=\"well-lg\">\n" +
    "            <button class=\"btn btn-primary\" ng-click=\"repeater.getData()\">Get data</button>\n" +
    "            <button class=\"btn btn-warning\" ng-click=\"repeater.refreshData()\">Refresh data</button>\n" +
    "\n" +
    "            <table class=\"table table-striped\">\n" +
    "                <thead>\n" +
    "                <tr>\n" +
    "                    <th>#</th>\n" +
    "                    <th>name</th>\n" +
    "                    <th>phone</th>\n" +
    "                    <th>email</th>\n" +
    "                    <th>website</th>\n" +
    "                    <th>country</th>\n" +
    "                    <th>city</th>\n" +
    "                </tr>\n" +
    "                </thead>\n" +
    "\n" +
    "                <tbody>\n" +
    "                <tr ng-repeat=\"worker in repeater.workers track by worker.username\">\n" +
    "                    <td>{{ $index }}</td>\n" +
    "                    <td>{{ worker.name }}</td>\n" +
    "                    <td>{{ worker.phone }}</td>\n" +
    "                    <td><span email-to=\"worker.email\"></span></td>\n" +
    "                    <td>{{ worker.website }}</td>\n" +
    "                    <td>{{ worker.address.country }}</td>\n" +
    "                    <td>{{ worker.address.city}}</td>\n" +
    "                </tr>\n" +
    "                </tbody>\n" +
    "\n" +
    "            </table>\n" +
    "        </div>\n" +
    "    </tab>\n" +
    "\n" +
    "    <tab heading=\"ngIf\">\n" +
    "        <div class=\"well-lg\">\n" +
    "            <button class=\"btn btn-primary\" ng-click=\"repeater.getAsyncData()\">Get data</button>\n" +
    "\n" +
    "            <div class=\"list-group\"\n" +
    "                 ng-repeat=\"worker in repeater.asyncWorkers\">\n" +
    "\n" +
    "                <h4 class=\"list-group-item-heading\">{{ worker.name }}\n" +
    "                    <button class=\"btn btn-xs btn-info\"\n" +
    "                            ng-click=\"workerInfo = !workerInfo\">\n" +
    "                        more info\n" +
    "                    </button>\n" +
    "\n" +
    "                </h4>\n" +
    "\n" +
    "                <ul class=\"list-unstyled\" ng-if=\"workerInfo\">\n" +
    "                    <li>{{ worker.name }}</li>\n" +
    "                    <li>{{ worker.phone }}</li>\n" +
    "                    <li><span email-to=\"worker.email\"></span></li>\n" +
    "                    <li>{{ worker.website }}</li>\n" +
    "                    <li>{{ worker.address.country }}</li>\n" +
    "                    <li>{{ worker.address.city}}</li>\n" +
    "                </ul>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </tab>\n" +
    "\n" +
    "    <tab heading=\"filtering\">\n" +
    "        <div class=\"well-lg\">\n" +
    "\n" +
    "            <button class=\"btn btn-primary\"\n" +
    "                    ng-click=\"repeater.getFilterdData()\">\n" +
    "                    Get data\n" +
    "            </button>\n" +
    "\n" +
    "            <div class=\"well-sm\">\n" +
    "                <input type=\"text\"\n" +
    "                       class=\"form-control\"\n" +
    "                       ng-model=\"query\">\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"well-sm\">\n" +
    "                <ul class=\"list-group\">\n" +
    "                    <li class=\"list-group-item\"\n" +
    "                        ng-repeat=\"worker in repeater.filterdWorkers\"\n" +
    "                        ng-show=\"([worker.name] | filter:query).length\"\n" +
    "                        ng-bind=\"worker.name\">\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </tab>\n" +
    "</tabset>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("welcome/welcome.tmpl.html",
    "<div class=\"jumbotron\">\n" +
    "    <div class=\"container\">\n" +
    "        <h1>AngularJS-IL #9</h1>\n" +
    "        <p class=\"lead\">\n" +
    "            reference code for the <strong>\"performance and production tips\"</strong> talk\n" +
    "            from the AngularJS meetup #9\n" +
    "        </p>\n" +
    "        <p>\n" +
    "            <button ng-click=\"welcome.start()\" class=\"btn btn-primary btn-lg\">Lets Go!</button>\n" +
    "        </p>\n" +
    "    </div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("utils/directives/heavy-lifting/heavy-lifting.tmpl.html",
    "<h2>Heavy lifting directive</h2>");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("utils/directives/panel-widget/panel-widget.tmpl.html",
    "<div class=\"panel panel-primary\">\n" +
    "    <div class=\"panel-heading\">I'm the panel heading!</div>\n" +
    "    <div class=\"panel-body\">\n" +
    "        <p>Should we really need to add watchers just to make this widget work?</p>\n" +
    "    </div>\n" +
    "</div>");
}]);
})();
