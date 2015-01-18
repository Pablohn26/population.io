angular
  .module('populationioApp', [ 'ngRoute', 'duScroll', 'ngResource', 'ui.router', 'ngAnimate', 'ui.bootstrap'])
  .config(function ($locationProvider, $urlRouterProvider, $httpProvider) {


    // $locationProvider.html5Mode(true);

    // cross domain restriction fixes
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  })
  .run(function ($rootScope) {
    console.log('App is running...');
    $rootScope.loadingDataSections = 0;
    $rootScope.currentPage = 0;
  })
;
