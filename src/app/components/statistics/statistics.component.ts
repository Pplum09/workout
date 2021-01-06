import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {


  public data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'Bench',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#4bc0c0'
          },
          {
              label: 'Squat',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: '#565656'
          },
          {
              label: 'Deadlift',
              data: [32, 8, 28, 21, 16, 15, 48],
              fill: false,
              borderColor: '#2196F3'
          }
      ]
  }

  constructor() { }

  ngOnInit(): void {
  }
}
