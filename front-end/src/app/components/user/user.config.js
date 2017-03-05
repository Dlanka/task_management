(function () {
    "use strict";

    angular
        .module('app.user')
        .config(roots);

    function roots($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('user');

        $stateProvider
            .state('user', {
                url: '/user',
                templateUrl: 'src/app/components/user/user.tmpl.html',
                controller: 'userController',
                controllerAs: 'vm'
            })
    }

})();