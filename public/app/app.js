import app from './main-module/index';

import './type.script/index.ts';
// import  styles
import '../styles/less/index.less';
import '../styles/sass/index.sass';
import '../styles/scss/index.scss';
import '../styles/css/index.css';

// import  media

import icon from '../media/image/png/icon.png';

import './controllers/main-controller/index.js';

import mainPage from '../pages/main-wrapper.html';

import './directives/main.directives/index.js';

app.directive('example', function () {
  return {
    restrict: 'C',
    link: function (scope, element, attrs) {
      scope.myExample = [
        'Example-1',
        'Example-2',
        'Example-3',
        'Example-4',
        'Example-5',
      ];
      scope.selected = 0;
      scope.functionClick = function (index) {
        scope.selected = index;
      };
    },
  };
});
