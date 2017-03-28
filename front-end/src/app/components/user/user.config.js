(function () {
    "use strict";

    angular
        .module('app.user')
        .config(roots);

    function roots($stateProvider, $urlRouterProvider) {

        //$urlRouterProvider.otherwise('user');

        // $stateProvider
        //     .state('user', {
        //         url: '/user',
        //         templateUrl: 'src/app/components/user/user.form.tmpl.html',
        //         controller: 'userController',
        //         controllerAs: 'vm'
        //     })
        //
        // $stateProvider
        //     .state("user", {
        //         url: '/user',
        //         views: {
        //             "@": {
        //                 templateUrl: 'src/app/layout/layout.tmpl.html',
        //                 controller: 'userController',
        //                 controllerAs: 'vm',
        //             },
        //             "top@user": {
        //                 templateUrl: 'src/app/components/user/toolbar.tmpl.html'
        //             },
        //             "left@user": {
        //                 templateUrl: 'src/app/layout/menu/menu.tmpl.html'
        //             },
        //             "right@user": {
        //                 templateUrl: 'src/app/components/user/user.form.tmpl.html'
        //             },
        //             "main@user": {
        //                 templateUrl: 'src/app/components/user/user.view.tmpl.html'
        //             }
        //         },
        //         data: {
        //             my: 'My Data'
        //         }
        //     })
        //     .state("dashboard", {
        //         url: '/dashboard',
        //         views: {
        //             "@": {
        //                 templateUrl: 'src/app/layout/layout.tmpl.html',
        //                 controller: 'dashboardController',
        //                 controllerAs: 'vm',
        //             },
        //             "top@dashboard": {
        //                 templateUrl: 'src/app/components/user/toolbar.tmpl.html'
        //             },
        //             "left@dashboard": {
        //                 templateUrl: 'src/app/layout/menu/menu.tmpl.html'
        //             },
        //
        //             "main@dashboard": {
        //                 templateUrl: 'src/app/components/user/user.view.tmpl.html'
        //             }
        //         },
        //     })
    }

})();