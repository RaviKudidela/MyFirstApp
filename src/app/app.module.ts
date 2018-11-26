import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PostsComponent } from './posts/posts.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PracticeComponent } from './practice/practice.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './component-interaction/parent/parent.component';
import { ChildComponent } from './component-interaction/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    PostsComponent,
    DashboardComponent,
    PracticeComponent,
    LifecycleComponent,
    LoginComponent,
    ParentComponent,
    ChildComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
