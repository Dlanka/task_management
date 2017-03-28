(function () {
    "use strict";

    angular
        .module('app.project')
        .controller('projectController', projectController);

    function projectController($scope, projectFactory, toast, MESSAGE, $mdSidenav, $state) {

        var vm = this;
        vm.projectForm = null;
        vm.navRightTitle = "Add User";
        vm.valid = true;

        // set style class for sideNav width
        vm.navSize = 'width-400';
        // vm.userForm.$error.isExistEmail = true;
        vm.openSideNav = openSideNav;

        function openSideNav() {
            $mdSidenav('right').toggle();
        }

    }

})();