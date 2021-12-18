import app from '../../main-module/index';
import pages from '../../imports/pages.js';
import errorPage from '../../../pages/error.page/index.html';




app.config([
    '$routeProvider',
    '$locationProvider',
    ($routeProvider, $locationProvider) => {
        $routeProvider
            .when('/', {
                templateUrl: pages.menuPath[0],
            })
            .when('/home', {
                templateUrl: pages.menuPath[0],
            })
            .when('/about', {
                templateUrl: pages.menuPath[1],
            })
            .when('/auth', {
                templateUrl: pages.menuPath[2],
            })
            .when('/reg', {
                templateUrl: pages.menuPath[3],
            })
            .when('/error', {
                templateUrl: errorPage,
            })
            .otherwise({
                redirectTo: '/error',
            });
    },
]);