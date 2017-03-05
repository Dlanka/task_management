(function () {
    "use strict";

    angular
        .module('app',[
            // Third Party
            'ngMaterial',
            'ui.router',

            // custom
            'app.dashboard',
            'app.user'
        ]);
})();