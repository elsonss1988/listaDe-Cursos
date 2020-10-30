import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  //selector:'app-course-list',
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{
filteredCourses: Course[]=[];
_courses:Course[]=[];
_filterBy: string;

  constructor (private courseService:CourseService){}
  ngOnInit():void{
    //this._courses=this.courseService.retrieveAll();
    this.retrieveAll();

  }
retrieveAll():void{
  this.courseService.retrieveAll().subscribe({
    next:courses=>{
      this._courses=courses;
      this.filteredCourses=this._courses;    }
  })
  error: err=> console.log('Error',err)
}

  set filter(value: string) {
    this._filterBy = value;
    this.filteredCourses=this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }
  get filter() {
    return this._filterBy;
  }
}
    //   this.courses=[
  //     {
  //     id: 1,
  //     name:'Angular:Forms',
  //     imageUrl:'./assets/images/forms.png',
  //     price:99.99,
  //     code:'ABC 123',
  //     durating:126,
  //     rating:4.5,
  //     releaseDate:'February 2, 2020',
  //     description:'string',
  //   },
  //   {
  //     id: 2,
  //     name:'Angular:HTTP',
  //     imageUrl:'./assets/images/http.png',
  //     price:45.99,
  //     code:'LKL 123',
  //     durating:88,
  //     rating:3,
  //     releaseDate:'July 20,2020',
  //     description:'string',
  //   }
  // ]

