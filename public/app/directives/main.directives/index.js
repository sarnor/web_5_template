import app from '../../main-module/index';

export default app.directive('mainWrapper', [
  function () {
    return {
      restrict: 'ACE',
      templateUrl: '../../../pages/main-wrapper.html',
      link: function (scope, element, attrs) {},
    };
  },
]);
