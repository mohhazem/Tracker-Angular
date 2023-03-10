import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{

  tasks:Task[]=[];
  
  constructor(private service: TaskService){};

  ngOnInit(): void {
      this.service.getTasks().subscribe((tasks)=>(this.tasks=tasks));
  }

}