import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
  const temp = document.createElement('script');
  const body = document.body;
  temp.setAttribute('src','//code.tidio.co/buqlihnisi6hg1wzjbdbouk8bz0b1t59.js');
  body.appendChild(temp);
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
