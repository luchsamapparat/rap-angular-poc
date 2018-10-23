import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare var rap;

if (environment.production) {
  enableProdMode();
}

let initialized = false;

rap.on('render', (...args) => {
  if (initialized) {
    return;
  }

  if (document.querySelectorAll('[si-entry-id]').length === 0) {
    return;
  }

  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));

  initialized = true;
});

