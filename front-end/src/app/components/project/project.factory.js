(function () {
    "use strict";

    angular
        .module('app.project')
        .factory('projectFactory',projectFactory);

    function projectFactory($http,API_CONFIG) {

        function addProject() {

        }
        return {
            addProject:addProject
        }
    }

})();