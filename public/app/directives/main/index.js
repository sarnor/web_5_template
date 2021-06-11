import app from '../../main-module/index';
import mainPage from '../../../pages/main.wrapper/index.html';

app.directive('mainWrapper', [
  () => {
    return {
      restrict: 'ACE',
      templateUrl: mainPage,
      link: function (scope, element, attrs) {},
    };
  },
]);
