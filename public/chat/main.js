(function(global) {


    'use strict';
    var main = angular.module('main', ['ui.bootstrap']);

    main.service('ShareDataService', function() {
        this.loginInstance = null;
    });


    main.run(['$rootScope', function($rootScope) {
    	$rootScope.$on('RESET_SOCKET', function(message) {
    		console.log('$rootScope called');
    		$rootScope.$broadcast('RESET_SOCKET1');
    	})
    }]);

    global.main_module = main;

})(this)