// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyAtiIcH8rTQM1jDWnPzY4MDwzm262n7ZJo',
    authDomain: 'dw-mcruzt-app.firebaseapp.com',
    databaseURL: 'https://dw-mcruzt-app.firebaseio.com',
    projectId: 'dw-mcruzt-app',
    storageBucket: 'dw-mcruzt-app.appspot.com',
    messagingSenderId: '179797255850',
    appId: '1:179797255850:web:272163e09cd5f4137f12d3'
  },
  routeHome: '/home',
  apiUrl: 'https://rickandmortyapi.com/api/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
