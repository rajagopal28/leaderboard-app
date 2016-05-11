import {bootstrap} from 'angular2/platform/browser';
import {HTTP_BINDINGS} from 'angular2/http';
import {SelectionBar}   from './components/selection_bar.ts';

bootstrap(SelectionBar, [HTTP_BINDINGS]);
