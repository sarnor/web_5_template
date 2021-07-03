import app from '../../main-module/index';
import pages from '../../imports/pages.js';
import errorPage from '../../../pages/error.page/index.html';

app.config([
    '$routeProvider',
    '$locationProvider',
    ($routeProvider, $locationProvider) => {
        $routeProvider
            .when('/', {
                templateUrl: pages.htmlPages[1],
            })
            .when('/home', {
                templateUrl: pages.htmlPages[1],
            })
            .when('/auth', {
                templateUrl: pages.htmlPages[0],
            })
            .when('/regg', {
                templateUrl: pages.htmlPages[2],
            })
            .when('/error', {
                templateUrl: errorPage,
            })
            .otherwise({
                redirectTo: '/error',
            });
    },
]);