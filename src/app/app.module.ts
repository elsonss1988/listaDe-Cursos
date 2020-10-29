import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list.component';
import { StarComponent } from './star/star.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Course } from './course';
import { error404Component } from './error404/error404.component';
import { CourseInfoComponent } from './course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    NavBarComponent,
    CourseInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses',pathMatch:'full'
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
      {
        path: 'courses',component:CourseListComponent
      },
      {
        path: '**', component:error404Component
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

