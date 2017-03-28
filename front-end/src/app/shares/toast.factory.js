(function () {
    "use strict";

    angular
        .module('app')
        .factory('toast', toast);

    function toast($mdToast) {

        function showMessage(message, type) {

            var tClass = type ? type : '';

            $mdToast.show(
                $mdToast
                    .simple()
                    .textContent(message)
                    .position('top , right')
                    .toastClass(tClass)
                    .hideDelay(3000)
            );
        }

        return {
            show: showMessage
        }
    }
})();