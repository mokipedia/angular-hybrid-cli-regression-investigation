import {
  APP_INITIALIZER,
  ApplicationRef,
  DoBootstrap,
  Inject,
  Injector,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { UIRouterModule } from '@uirouter/angular';
import {
  NgHybridStateDeclaration,
  UIRouterUpgradeModule,
} from '@uirouter/angular-hybrid';
import angular from 'angular';
import { PreBootService } from './pre-boot.service';

const defaultFutureState: NgHybridStateDeclaration = {
  name: 'default.**',
  url: '/',
  loadChildren: () =>
    import('./modules/test-angular-route/test-angular-route.module').then(
      (m) => m.TestAngularRouteModule
    ),
};

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    UIRouterModule,
    UIRouterUpgradeModule.forRoot({
      states: [defaultFutureState],
    }),
  ],
  declarations: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (preBootService: PreBootService) => {
        const apiInfo$ = preBootService.getApiInfo();
        apiInfo$.then((apiInfo) =>
          angular.module('app').provider('ApiInfo', apiInfo as any)
        );
        return () => apiInfo$;
      },
      deps: [PreBootService],
      multi: true,
    },
  ],
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule, private injector: Injector) {}

  public ngDoBootstrap(appRef: ApplicationRef): void {
    this.upgrade.bootstrap(document.body, ['app'], {
      strictDi: true,
    });
  }
}
