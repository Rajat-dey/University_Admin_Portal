import { Component, OnInit, Input, ViewChild   } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  @Input() users: any;

  CourseList: string[] = ['DSA', 'Python', 'Electronics', 'Software_Design', 'Chemistry', 'Statics'];
  constructor() { }
 
displayedColumns: string[] = [ 'FullName', 'Contact', 'AcademicYear', "Semester","Courses"];
dataSource = new MatTableDataSource();

  // @ViewChild(MatPaginator, { static: false })
  // paginator: MatPaginator;


ngOnInit() {
  this.dataSource = new MatTableDataSource(this.users);
}

private paginator: MatPaginator;

@ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
  this.paginator = mp;
  this.setDataSourceAttributes();
}
setDataSourceAttributes() {
  this.dataSource.paginator = this.paginator;
}
}
