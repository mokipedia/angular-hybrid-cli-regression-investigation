import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UIRouter, UrlService } from '@uirouter/core';
import { UIRouterRx } from '@uirouter/rx';
import { AppModule } from './app.module';
import { environment } from './environments/environment';

import './angularjs-boot.js';
import './downgrade.ts';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((platform) => {
    const uiRouter: UIRouter = platform.injector.get(UIRouter);

    uiRouter.plugin(UIRouterRx);

    const urlService: UrlService = uiRouter.urlService;

    function startUIRouter(): void {
      urlService.listen();
      urlService.sync();
    }

    platform.injector.get(NgZone).run(startUIRouter);
  })
  .catch((err) => console.error(err));
