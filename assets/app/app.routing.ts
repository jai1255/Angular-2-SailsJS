/**
 * Created by srina on 1/11/2017.
 */
import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {ContactComponent} from './contact.component';
import {TestComponent} from './test.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'appli'},
  {path: 'appli', component: ContactComponent},
  {path: 'test', component: TestComponent},
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}
export const routingComponents =[ContactComponent,TestComponent];
