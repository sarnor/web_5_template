import app from './main-module/index';

import './type.script/index.ts';
// import  styles
import '../styles/less/index.less';
import '../styles/sass/index.sass';
import '../styles/scss/index.scss';
import '../styles/css/index.css';

// import  media

import icon from '../media/image/png/icon.png';

import main from './controllers/main/index.js';

import './directives/main/index.js';
import './directives/main.menu/index.js';
import './factory/main/index.js';

import pages from './imports/pages';


 app.config([
   '$routeProvider',
   '$locationProvider',
    ($routeProvider, $locationProvider)=> {
     $routeProvider
       .when('/', {
         templateUrl: pages.htmlPages[3],
       })
       .when('/auth', {
         templateUrl: pages.htmlPages[0],
       })
       .when('/error', {
         templateUrl: pages.htmlPages[2],
       })

       .otherwise({
         redirectTo: '/error',
       });
   },
 ]);

// setTimeout(() => {
//   document.querySelector('.circle').innerText = "papap".split('').map((e, i) => { `<span style="--rot:${i * 10}deg">${e}</span>` }).join('');
// }, 2000)