import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getstudentList() {
    return this.http.get(this.rootURL + '/studentList');
  }

  addstudent(student: any) {
    return this.http.post(this.rootURL + '/student', {student});
  }

}
