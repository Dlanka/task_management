(function () {
    "use strict";

    angular
        .module('app.user')
        .controller('userController', userController);

    function userController($scope, userFactory, toast, MESSAGE, $mdSidenav, $state) {

        var vm = this;
        vm.userForm=null;
        vm.user = {};
        vm.userData = {};
        vm.navRightTitle = "Add User";
        vm.valid = true;

        // vm.userForm.email.$error.isExistEmail = true;

        // set style class for sideNav width
        vm.navSize = 'width-400';
        // vm.userForm.$error.isExistEmail = true;
        vm.isEquals=true;
        vm.addUser = addUser;
        vm.resetForm = resetForm;
        vm.openSideNav = openSideNav;

        function addUser(user) {

            var user = {
                username: user.username,
                email: user.email,
                password: user.password
            };

            userFactory.addUser(user)
                .then(function (data) {
                    resetForm();
                    console.log(data);
                    // Show toast message
                    toast.show(MESSAGE.success);
                    getAllUsers();
                });
        }

        function getAllUsers() {
            userFactory.getAllUsers().then(function (data) {
                vm.userData = data.data;
            });
        }

        function resetForm(userForm) {

            vm.user = {
                username: '',
                email: '',
                password: '',
                conf_password: ''
            };

            vm.userForm.$setPristine();
            vm.userForm.$setUntouched();

        }

        function openSideNav() {

            $mdSidenav('right').toggle();

        }

        getAllUsers();
    }

})();