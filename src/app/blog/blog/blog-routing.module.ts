import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../signin/signin.component';
import { BlogDetailsComponent } from '../blog-details/blog-details.component';
const routes: Routes = [
  { path: ``, component: SigninComponent},
  { path:`blog-details`, component: BlogDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
