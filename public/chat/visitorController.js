(function(global) {


	'use strict';
    var main_module = global.main_module;
    var visitorController = function($scope) {
    	$scope.visitors = ['aaa', 'bbb', 'ccc'];

    	$scope.$on('REFRESH_VISITOR', function() {
    		
    	})
    }

    visitorController.$inject = ['$scope'];
    main_module.controller('VisitorController', visitorController);

})(this);