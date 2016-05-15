import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_BINDINGS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {AppComponent}   from './components/app.component';
bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_BINDINGS]);
