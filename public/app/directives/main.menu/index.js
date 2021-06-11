import app from '../../main-module/index';

app.directive('mainMenu', function () {
  return {
    restrict: 'C',
    link: (scope, element, attrs) => {
      scope.items = ['Items-1', 'Items-2', 'Items-3', 'Items-4', 'Items-5'];
      scope.selected = 0;
      scope.addActive = function (index) {
        scope.selected = index;
      };
    },
  };
});
