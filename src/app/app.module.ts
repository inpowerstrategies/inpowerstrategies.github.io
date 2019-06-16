import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  CourseDetailsComponent,
  CourseOverviewComponent,
  CoursePricingComponent
} from './courses/index';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { FooterBarComponent } from './footer/footer.component';
import { Error404Component } from './errors/404.component';
import { AboutComponent } from './about/about.component';
import { ResourceOverviewComponent } from './resources/resource-overview.component';
import { appRoutes } from './routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterBarComponent,
    Error404Component,
    CourseOverviewComponent,
    CourseDetailsComponent,
    CoursePricingComponent,
    AboutComponent,
    ResourceOverviewComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
