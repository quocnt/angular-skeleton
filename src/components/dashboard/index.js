import dashboardComponent from './dashboard.component';
import dashboardService from './dashboard.service';

export default angular.module('app.components.dashboard', [])
    .component('dashboard', dashboardComponent)
    .factory('dashboardService', dashboardService)
    .config(function ($stateProvider, $urlServiceProvider) {
        'ngInject';
        $urlServiceProvider.rules.otherwise({
            state: 'dashboard'
        });

        $stateProvider.state('dashboard', {
            url: '/dashboard',
            component: 'dashboard'
        })
    });