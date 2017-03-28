(function () {
    "use strict";

    angular
        .module('app')
        .controller('layoutController',layoutController);


    function layoutController($http) {
        var vm = this;

        vm.message = "Hi";

    }

})();