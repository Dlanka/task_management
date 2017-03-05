(function () {
    "use strict";

    angular
        .module('app')
        .config(roots);

    function roots($stateProvider,
                   $urlRouterProvider,
                   $mdThemingProvider) {

        // Material Theme config
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('grey');


        // Router config
        $urlRouterProvider.otherwise('dashboard');

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'src/app/components/dashboard/dashboard.tmpl.html',
                controller: 'dashboardController',
                controllerAs: 'vm'
            })


    }

})();