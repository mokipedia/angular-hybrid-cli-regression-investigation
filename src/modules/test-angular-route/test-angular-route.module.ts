import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2StateDeclaration } from '@uirouter/angular';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';
import { TestAngularComponent } from './test-angular.component';

const defaultState: Ng2StateDeclaration = {
  name: 'default',
  url: '/',
  component: TestAngularComponent,
};

@NgModule({
  declarations: [TestAngularComponent],
  imports: [
    CommonModule,
    UIRouterUpgradeModule.forChild({ states: [defaultState] }),
  ],
})
export class TestAngularRouteModule {}
