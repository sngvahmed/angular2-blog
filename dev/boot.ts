import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from './main/app.module';
import {HeaderModule} from './header/header.module';

platformBrowserDynamic().bootstrapModule(AppModule);
platformBrowserDynamic().bootstrapModule(HeaderModule);
