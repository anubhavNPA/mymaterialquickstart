(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
      

      // other libraries
      'hammerjs':                  'npm:hammerjs',
      'rxjs':                      'npm:rxjs',
      'primeng':                   'npm:primeng',
      'angular2-datatable':        'npm:angular2-datatable',
      'lodash':                    'npm:lodash/lodash.js',
      'ng2-material':               'npm:ng2-material',

    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      hammerjs: {
        defaultExtension: 'js'
      },
      primeng: {
          defaultExtension: 'js'
      },
      'angular2-datatable': {
          main: 'index.js',
          defaultExtension: 'js'
      },
      'ng2-material': {
          main: 'index.js',
          defaultExtension: 'js'
      }
    }
  });
})(this);
