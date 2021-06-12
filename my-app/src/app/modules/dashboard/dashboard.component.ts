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


  Courses = new FormControl();

  CourseList: string[] = ['DSA', 'Python', 'Electronics', 'Software_Design', 'Chemistry', 'Statics'];


  constructor(private serviceService: ServiceService) {}

  title = 'Admin Portal';

  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('',  Validators.required),
    email: new FormControl('', Validators.required)
  });

  users: any[] = [];
  userCount = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmit() {
    this.serviceService.addstudent(this.userForm.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
      this.userCount = this.userCount + 1;
      console.log(this.userCount);
      this.userForm.reset();
    });
  }

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