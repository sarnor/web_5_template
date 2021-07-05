import app from '../../main-module/index';
import pages from '../../imports/pages.js';
import errorPage from '../../../pages/error.page/index.html';
console.log('pages.htmlPages', pages.htmlPages);


app.config([
    '$routeProvider',
    '$locationProvider',
    ($routeProvider, $locationProvider) => {
        $routeProvider
            .when('/', {
                templateUrl: pages.htmlPages[2],
            })
            .when('/home', {
                templateUrl: pages.htmlPages[2],
            })
            .when('/auth', {
                templateUrl: pages.htmlPages[1],
            })
            .when('/reg', {
                templateUrl: pages.htmlPages[3],
            })
            .when('/about', {
                templateUrl: pages.htmlPages[0],
            })
            .when('/error', {
                templateUrl: errorPage,
            })
            .otherwise({
                redirectTo: '/error',
            });
    },
]);