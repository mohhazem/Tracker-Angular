import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';
import { FormRecord } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private database='http://localhost:3000/takservices';
  constructor() { }

  getTasks() : Observable<Task[]>{
    
    const tasks =  of(TASKS);
    return tasks;
  }
}
