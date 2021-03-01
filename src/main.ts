import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UIRouter, UrlService } from '@uirouter/core';
import { UIRouterRx } from '@uirouter/rx';

import './angularjs-boot.js';
import { AppModule } from './app.module';
import './downgrade.ts';
import { environment } from './environments/environment';

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
