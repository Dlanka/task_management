(function () {
    "use strict";

    angular
        .module('app.user')
        .factory('userFactory',userFactory);

    function userFactory($http,API_CONFIG) {

        function getAllUsers() {
            return $http.get(API_CONFIG.url('/api/user/all'));
        }

        function addUser(user) {
            return $http.post(API_CONFIG.url('/api/user/'),user);
        }
        return {
            getAllUsers:getAllUsers,
            addUser:addUser
        };
    }

})();