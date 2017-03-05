(function () {
    "use strict";

    angular
        .module('app.dashboard')
        .controller('dashboardController',dashboardController);


    function dashboardController() {
        var vm = this;

        vm.message = "Hi";
    }

})();