import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../../core/service.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {

  CourseList: string[] = ['DSA', 'Python', 'Electronics', 'Software_Design', 'Chemistry', 'Statics'];  //Static Subjects to select in the form

  constructor(private serviceService: ServiceService) {}

  title = 'Admin Portal';

// Validator Added in the student Form
  StudentForm = new FormGroup({
    FullName: new FormControl('', Validators.required),
    Contact: new FormControl('', Validators.required),
    AcademicYear: new FormControl('',  Validators.required),
    Semester: new FormControl('', Validators.required),
    Subjects: new FormControl('', Validators.required)

  });

  users: any[] = [];
  userCount = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();


  // On Submit of the Application -- Button Trigger --> sending the data through request

  onSubmit() {
    this.serviceService.addstudent(this.StudentForm.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
     // console.log('message::::', data);
      this.userCount = this.userCount + 1;
    //  console.log(this.userCount);
      this.StudentForm.reset();  // reset the form after submission
    });
  }

  // Getting response from the api call --> Until the data are there and storing it to the users to use in the student component

  getAllUsers() {
    this.serviceService.getstudentList().pipe(takeUntil(this.destroy$)).subscribe((users: any) => {
        this.users = users;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}