import app from '../../main-module/index.js';

export default app.factory('mainFactory', () => {
  return {
    mainMenu: [
      {
        name: 'Home',
        url: 'home',
        className: 'home-page',
      },
      {
        name: 'Auth',
        url: 'auth',
        className: 'auth-page',
      },
    ],
  };
});
