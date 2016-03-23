/*Setting main module for adminPanelApp and injected other modules.
injected satellizer module for  token-based authentication for AngularJS with built-in
support for Google, Facebook, LinkedIn, Twitter, Instagram, GitHub, Bitbucket, Yahoo etc..*/


angular.module('adminPanelApp', ['satellizer','ngResource','ui.router', 'ngAnimate']);

//configuration of main module

  angular.module('adminPanelApp').config(function ($stateProvider, $urlRouterProvider, $authProvider,$httpProvider) {


    $httpProvider.defaults.useXDomain =true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.defaults.withCredentials = false;

    $authProvider.loginUrl = 'http://54.86.64.100:3000/api/v3/auth/user';
    $authProvider.signupUrl='http://54.86.64.100:3000/api/v3/auth/user';

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home',{
        url:'/home',
        templateUrl:'templates/Home/index.html',
        controller:'homeCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'templates/Login/index.html',
        controller: 'loginCtrl',
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('signup',{
        url:'/signin',
        templateUrl:'templates/Signup/signup.html',
        controller:'signupCtrl'
      })
      .state('logout',{
        url:'/logout',
        controller:'logoutController'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'templates/Dashboard/index.html',

        resolve:{
          loginRequired:loginRequired // loginRequired function will check for token.User can only view Dashboard if logged in
        }

      })
      .state('dashboard.list', {
        url: '/list',
        templateUrl: 'templates/Dashboard/dashboard-list.html',
        controller: function ($scope) {
          $scope.names = ['sharvari', 'pooja', 'ruchi']
        }
      })
      .state('dashboard.paragraph', {
        url: '/paragraph',
        template: 'This is Dashboard page'

      })
      .state('user', {
        url: '/user',
        templateUrl: 'templates/User/index.html',
        controller: 'userDataCtrl'

      })
      .state('feedback', {
        url: '/Feedback',
        templateUrl: 'templates/Feedback/index.html',
        controller: 'feedbackController',
        resolve:{
          loginRequired:loginRequired
        }

      })
      .state('record', {
        url: '/record',
        templateUrl: 'templates/Record/index.html',
        controller: 'recordController'

      })
      .state('usersRecord',{
        url:'/users',
        template:'<h1>{{title}}</h1>',
        controller:'usersCtrl'
      });




    $authProvider.github({
      url:'http://54.86.64.100:3000/api/v3/auth/github',
      clientId: 'f604a2a0a47c44cf0da2',
      redirectUri: 'http://localhost/frontend/app/#/Dashboard'
      // authorizationEndpoint: 'https://github.com/login/oauth/authorize',
      // //to redirect after github logged in
      // redirectUri: 'http://localhost/frontend/app/#/Dashboard',
      // optionalUrlParams: ['scope'],
      // scope: ['user:email'],
      // scopeDelimiter: ' ',
      // type: '2.0',
      //
      // popupOptions: { width: 1020, height: 618 }
    });


    function skipIfLoggedIn($q, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        console.log('skipping auth true');
        deferred.reject();

      } else {
        console.log('auth false');
        deferred.resolve();
      }
      return deferred.promise;
    }
    function loginRequired($q, $location, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } else {
        $location.path('/home');
      }
      return deferred.promise;
    }
  });

