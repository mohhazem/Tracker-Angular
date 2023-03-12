import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private database='http://localhost:5000/tasks';
  constructor(private http:HttpClient) { }

  getTasks() : Observable<Task[]>{
    
    //console.log("workingggggggggggggggggggg")
    return this.http.get<Task[]>(this.database)
  }
}
