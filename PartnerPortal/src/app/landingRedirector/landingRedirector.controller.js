'use strict';

(function () {

    function landingRedirectorCtrl($log, $state, sessionService) {
        $log.log('Landing Redirector');
        if (sessionService.isAuthenticated()) {
            $state.go('homepage', {}, {location: 'replace'});
        } else {
            $state.go('login');
        }
    }

    angular.module('dealerportal.landing', [])
        .controller('landingRedirectorCtrl', landingRedirectorCtrl);

})();


