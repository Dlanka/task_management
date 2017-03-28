(function () {
    "use strict";

    angular
        .module('app.dashboard')
        .controller('dashboardController',dashboardController);


    function dashboardController($http) {
        var vm = this;

        vm.message = "Hi";

        // $http.get('http://localhost:3000/api/user/all')
        //     .then(function (data) {
        //     console.log(data);
        // })
    }

})();