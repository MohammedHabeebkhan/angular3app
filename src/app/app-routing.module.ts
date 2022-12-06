// import { AdduserDailogComponent } from './dailog/adduser-dailog/adduser-dailog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserDailogComponent } from './dailog/adduser-dailog/adduser-dailog.component';

const routes: Routes = [
 
    // {path:'dailog', component: AdduserDailogComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
