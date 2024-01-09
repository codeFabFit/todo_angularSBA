import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {


// this gets a new task
  taskObj: Task = new Task();
// this stores task into array 
  taskArr: Task[] = []

  addTaskValue : string = "";
  editTaskValue : string = "";
  // storing the value from input

  constructor(private crudService : CrudService) {}

  ngOnInit(): void {
    this.editTaskValue = "";
    this.addTaskValue = "";
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTask();
    throw new Error('Method not implemented.');
  }

  // retreieving all task 
  getAllTask(){
    this.crudService.getAllTask().subscribe(res => {
      this.taskArr = res;
    }, err => {
      alert('Cant retreve list');
    })
  
  }

// adding task 
  addTask() {
    this.taskObj.task_name = this.addTaskValue
    this.crudService.addTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
      this.addTaskValue = '';
    }, err =>{
      alert(err)
    })
  }

  // editing a task and message if not done right 
editTask() {
  this.taskObj.task_name = this.editTaskValue;
  this.crudService.editTask(this.taskObj).subscribe(res => {
    this.ngOnInit();
  }, err => {
    alert('Failed to update task')
  }
  )
}

// deleting a task 
deleteTask(etask : Task) {
  this.crudService.deleteTask(etask).subscribe(res =>{
    this.ngOnInit();
  }, err =>{
    alert("Unable to delete task")
  })
}

call(etask : Task) {
  this.taskObj = etask;
  this.editTaskValue = etask.task_name;
}
}
