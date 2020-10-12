import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector:'app-course-list',
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{
  courses:Course[]=[];
  ngOnInit():void{
    this.courses=[
      {
      id: 1,
      name:'Angular:Forms',
      imageUrl:'./assets/images/forms.png',
      price:99.99,
      code:'ABC 123',
      durating:126,
      rating:4.5,
      realeseDate:'February 2, 2020',
    },
    {
      id: 2,
      name:'Angular:HTTP',
      imageUrl:'./assets/images/http.png',
      price:45.99,
      code:'LKL 123',
      durating:88,
      rating:3,
      realeseDate:'July 20,2020',
    }
  ]}
}
