import { Component, OnInit, Input, ViewChild  } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  CourseList: string[] = ['DSA', 'Python', 'Electronics', 'Software_Design', 'Chemistry', 'Statics'];

  constructor() { }

  @Input() users: any;


// studentsData : { AcademicYear: string; Contact: number; FullName: string;  Semester: string;   Subjects: string[]; }[];

 
displayedColumns: string[] = [ 'FullName', 'Contact', 'AcademicYear', "Semester","Courses"];


dataSource = new MatTableDataSource();



  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

ngOnInit() {

  this.dataSource =this.users;
  this.dataSource.paginator = this.paginator;
 
  console.log(this.dataSource.paginator);
}



}
