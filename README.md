# NgxModuleFederation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

## Changes done to base NgxCLI project to work with webpack
### angular.json
Use yarn for package manager...
<br/>
`  
"cli": {
"packageManager": "yarn"
},
`
<br/>
Replace @angular-builders with ngx-build-plus.
<br/>



### package.json
Update to 'ng' to use 'ngx'
Add resolutions element...
<br/>
`
"resolutions": {
"webpack": "^5.0.0"
},
`
<br/>
Enhance dependencies with module federation.
<br/>
`    
"@angular-architects/module-federation": "^1.2.4",
`
<br/>
Enhance devDependencies with...
<br/>
`"@angular-builders/custom-webpack": "^11.1.1",
`
<br/>
... and various loaders for webpack...
<br/>
`    
"style-loader": "^2.0.0",
"ts-loader": "^9.1.2",
"ts-node": "~8.3.0",
"tslint": "~6.1.0",
"typescript": "~4.1.5"
`
<br/>
For projects -> project-name -> architect -> build and serve, replace
'@angular-devkit/build-angular' with 'ngx-build-plus'. 
<br/>
In the 'build' options,  add customer webpack config...
<br/>
`
"customWebpackConfig": {
"path": "./webpack.config.js",
"replaceDuplicatePlugins": true
},
`

## Webpack
Add webpack configuration file (e.g. webpack.config.js)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
