import app from '../../main-module/index.js';

export default app.controller('mainCtrl', [
  '$scope',
  'mainFactory',
  ($scope, mainFactory) => {
    $scope.mainFactory = mainFactory;
  },
]);