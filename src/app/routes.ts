import { Routes } from '@angular/router';

import { ResourceOverviewComponent } from './resources/resource-overview.component';
import { AboutComponent } from './about/about.component';
import { Error404Component } from './errors/404.component';

import {
    CourseDetailsComponent,
    CourseOverviewComponent,
    CoursePricingComponent
} from './courses/index';

export const appRoutes: Routes = [
    { path: 'course', component: CourseDetailsComponent },
    { path: 'overview', component: CourseOverviewComponent },
    { path: 'pricing', component: CoursePricingComponent },
    { path: 'resources', component: ResourceOverviewComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/overview', pathMatch: 'full' },

    { path: '404', component: Error404Component },
    { path: '**', component: Error404Component }
]
