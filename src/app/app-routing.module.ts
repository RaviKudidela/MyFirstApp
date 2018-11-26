import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { PostsComponent } from './posts/posts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './component-interaction/parent/parent.component';
import { LoginFormComponent } from './Project/login-form/login-form.component';
import { QuotesComponent } from './Project/quotes/quotes.component';
import { RegistrationComponent } from './Project/registration/registration.component';

const routes: Route[] = [
  { path: '', redirectTo: "dashboard", pathMatch: "full" },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginForm', component:LoginFormComponent},
  { path: 'quotes', component:QuotesComponent},
   { path: 'registration', component:RegistrationComponent},
  { path: 'heroes', component: HeroesComponent },
  {
    path: 'posts', component: PostsComponent, children: [
      { path: '', component: PostsComponent, pathMatch: 'full' },
      { path: 'Lifecycle', component: LifecycleComponent }]
  },
  { path: 'lazyloading1', loadChildren: './module1/module1.module#Module1Module' },
  { path: 'lazyloading2', loadChildren: './module2/module2.module#Module2Module' },
  { path: 'component-interaction', component: ParentComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]

})
export class AppRoutingModule { }
