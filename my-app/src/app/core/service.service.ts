import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  //Root URL is used to check all the api call with particular /api

  rootURL = '/api';

  getstudentList() {
    return this.http.get(this.rootURL + '/studentList');    //to get the student list
  }

  addstudent(student: any) {
    return this.http.post(this.rootURL + '/student', {student}); //to add the student details
  }

}
