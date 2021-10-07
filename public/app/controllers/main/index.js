import app from '../../main-module/index.js';

//var absUrl = .absUrl();
export default app.controller('mainCtrl', [
  '$scope',
  'mainFactory',
  '$location',
  ($scope, mainFactory, $location) => {
    $scope.mainFactory = mainFactory;

    //console.log('$location', $location.path());
  },
]);