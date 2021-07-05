import app from '../../main-module/index';
import menuList from '../../imports/pages.js';


app.directive('mainMenu', function () {
  return {
    restrict: 'C',
    link: (scope, element, attrs) => {
      scope.items = menuList.menuList;
      scope.selected = 0;
      scope.addActive = function (index) {
        scope.selected = index;
      };
    },
  };
});