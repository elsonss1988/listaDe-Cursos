import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
//import { Course } from './course';
import { error404Component } from './error404/error404.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseModule } from './course.module';
import { CoreModule } from './core/core-module';

@NgModule({
  declarations: [
    AppComponent,
    error404Component,
  ],
  imports: [
    CoreModule,
    CourseModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses',pathMatch:'full'
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

