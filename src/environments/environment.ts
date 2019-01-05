// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBG_c2D7SnsopZDBtYrkvK_n76MyHyXYK8",
    authDomain: "motas-a.firebaseapp.com",
    databaseURL: "https://motas-a.firebaseio.com",
    projectId: "motas-a",
    storageBucket: "motas-a.appspot.com",
    messagingSenderId: "231479865534"
  }
};
