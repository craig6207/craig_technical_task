import { Component, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { TaskBoxData } from 'src/app/interfaces/task-box-data';
import { TaskBoxService } from '../../services/task-box.service';

@Component({
  selector: 'app-task-box',
  templateUrl: './task-box.component.html',
  styleUrls: ['./task-box.component.css']
})
export class TaskBoxComponent implements OnInit {
  faAngleRight = faAngleRight
  taskBoxData: TaskBoxData[] = []

  constructor(private taskService: TaskBoxService) { }

  ngOnInit(): void {
    this.taskBoxData = this.taskService.getData();
  }

}
