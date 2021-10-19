import app from '../../main-module/index';
import menuList from '../../imports/pages.js';


app.directive('mainMenu', ['$location', (location) => {
  return {
    restrict: 'C',
    link: (scope, element, attrs) => {
      scope.items = menuList.menuList;
      let r = menuList.menuList.indexOf(location.url().toString().split('/')[1]);
      scope.selected = r == -1 ? 0 : r;
      scope.addActive = index => scope.selected = index;
    },
  };
}]);