import { Component, OnInit } from '@angular/core';

declare var localStorageDB: any;

export interface Workout {
  name: string;
  weight: number;
  sets: number;
  repetitions: number;
  date: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public workouts: Workout[] = [
    {name: 'Bench', weight: 225, sets: 5, repetitions: 5, date: new Date()},
    {name: 'Bench', weight: 225, sets: 5, repetitions: 5, date: new Date()},
    {name: 'Bench', weight: 225, sets: 5, repetitions: 5, date: new Date()},
    {name: 'Bench', weight: 225, sets: 5, repetitions: 5, date: new Date()},
  ];
  private lib: any;

  constructor() { }

  ngOnInit(): void {
    this.lib = new localStorageDB("library", localStorage);
    if (this.lib.isNew()) {
      this.lib.createTable('workouts', ['name', 'weight', 'sets', 'repetition', 'date'])
      this.lib.commit();
    }

    console.log('pulling');
    this.workouts = this.lib.queryAll('workouts');
  }

}
