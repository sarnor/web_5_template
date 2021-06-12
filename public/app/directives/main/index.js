import app from '../../main-module/index';

import pages from '../../imports/pages';
console.log(pages.htmlPages);


app.directive('mainWrapper', [
  () => {
    return {
      restrict: 'ACE',
      templateUrl: pages.htmlPages[4],
      link: function (scope, element, attrs) {},
    };
  },
]);
