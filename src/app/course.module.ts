import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { ReplacePipe } from './shared/pipe/replace-pipe';
import { StarModule } from './shared/component/star-module';
import { AppPipeModule } from './shared/pipe/app-pipe-module';


@NgModule({
  declarations:[
    CourseListComponent,
    CourseInfoComponent,

  ],
  imports:[
    AppPipeModule,
    StarModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'courses',component:CourseListComponent
      },

      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
    ])
  ]
})

export class CourseModule {

}
