import { Component, OnInit } from '@angular/core';

declare var localStorageDB: any;

export interface Workout {
  ID: number;
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

  public workouts: Workout[] = [];
  public visibleSidebar4 = false;
  private lib: any;
  private selectedWorkout: Workout | null = null;

  constructor() { }

  ngOnInit(): void {
    this.lib = new localStorageDB("library", localStorage);
    if (this.lib.isNew()) {
      this.lib.createTable('workouts', ['name', 'weight', 'sets', 'repetition', 'date'])
      this.lib.commit();
    }
    this.workouts = this.getWorkouts();
  }

  public openEditMenu(workout: Workout): void {
    this.visibleSidebar4 = true;
    this.selectedWorkout = workout;
  }

  public deleteWorkout(): void {
    if (this.selectedWorkout !== null) {
      this.lib.deleteRows('workouts', {ID: this.selectedWorkout.ID});
      this.lib.commit();
      this.workouts = this.getWorkouts();

      this.selectedWorkout = null;
      this.visibleSidebar4 = false;
    }
  }

  public getWorkouts(): Workout[] {
    return this.lib.queryAll('workouts', {sort: [['date', 'DESC']]});
  }
}
