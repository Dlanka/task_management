(function () {
    "use strict";

    angular.module('app')
        .config(root);

    function root($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('dashboard');

        $stateProvider
            .state("dashboard", {
                url: '/dashboard',
                views: {
                    "@": {
                        templateUrl: 'src/app/layout/layout.tmpl.html',
                        controller: 'dashboardController',
                        controllerAs: 'vm'
                    },
                    "top@dashboard": {
                        templateUrl: ''
                    },
                    "left@dashboard": {
                        templateUrl: 'src/app/layout/menu/menu.tmpl.html'
                    },

                    "main@dashboard": {
                        templateUrl: ''
                    }
                },
            })
            .state("user", {
                url: '/user',
                views: {
                    "@": {
                        templateUrl: 'src/app/layout/layout.tmpl.html',
                        controller: 'userController',
                        controllerAs: 'vm'
                    },
                    "top@user": {
                        templateUrl: 'src/app/components/user/toolbar/toolbar.tmpl.html'
                    },
                    "left@user": {
                        templateUrl: 'src/app/layout/menu/menu.tmpl.html'
                    },
                    "right@user": {
                        templateUrl: 'src/app/components/user/user.form.tmpl.html'
                    },
                    "main@user": {
                        templateUrl: 'src/app/components/user/user.view.tmpl.html'
                    }
                },
                data: {
                    my: 'My Data'
                }
            })
            .state("project", {
                url: '/project',
                views: {
                    "@": {
                        templateUrl: 'src/app/layout/layout.tmpl.html',
                        controller: 'projectController',
                        controllerAs: 'vm'
                    },
                    "top@project": {
                        templateUrl: 'src/app/components/project/toolbar/toolbar.tmpl.html'
                    },
                    "left@project": {
                        templateUrl: 'src/app/layout/menu/menu.tmpl.html'
                    },
                    "right@project": {
                        templateUrl: 'src/app/components/project/project.form.tmpl.html'
                    },
                    "main@project": {
                        templateUrl: 'src/app/components/project/project.view.tmpl.html'
                    }
                }
            })
    }
})();