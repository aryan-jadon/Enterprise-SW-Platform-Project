import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  openProjectVal: boolean=false;
  openTrainingsVal: boolean=false;
  training: String='';
  openProjects () {
    this.openProjectVal = !this.openProjectVal;
  }
  openTrainings () {
    this.openTrainingsVal = !this.openTrainingsVal
  }
  trainingValue (training:any) {
    console.log(training)
  }
}
