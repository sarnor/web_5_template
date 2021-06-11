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

import auth from '../pages/auth/index.html';
import home from '../pages/home/index.html';
import error from '../pages/error/index.html';

const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}

importAll(require.context('../pages/', true, /\.html$/));
console.log('cache', cache);

app.config([
  '$routeProvider',
  '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: home,
      })
      .when('/auth', {
        templateUrl: auth,
      })
      .when('/error', {
        templateUrl: error,
      })

      .otherwise({
        redirectTo: '/error',
      });
  },
]);

// setTimeout(() => {
//   document.querySelector('.circle').innerText = "papap".split('').map((e, i) => { `<span style="--rot:${i * 10}deg">${e}</span>` }).join('');
// }, 2000)