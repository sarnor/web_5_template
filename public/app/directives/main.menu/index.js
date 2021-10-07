import app from '../../main-module/index';
import menuList from '../../imports/pages.js';


app.directive('mainMenu', ['$location', (location) => {
  return {
    restrict: 'C',
    link: (scope, element, attrs) => {
      scope.items = menuList.menuList;
      scope.selected = location.url().toString().indexOf(location.url().toString().split('/')[1]);
      scope.addActive = index => scope.selected = index;
      console.dir(location.url().toString().split('/')[1]);
    },
  };
}]);