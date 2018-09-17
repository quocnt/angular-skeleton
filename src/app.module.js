import 'jquery';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularMaterial from 'angular-material';
import AppComponent from './app.component.js';
import Common from './commons';
import Components from './components';
// import Pages from './pages';

import './styles.scss';

angular.module('app', [
  uiRouter,
  angularMaterial,
  Common.name,
  Components.name
  // Pages.name
])
.component('app', AppComponent);