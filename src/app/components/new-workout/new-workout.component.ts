import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

declare var localStorageDB: any;

@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.component.html',
  styleUrls: ['./new-workout.component.scss']
})
export class NewWorkoutComponent implements OnInit {

  public date: Date;
  public workoutForm = new FormGroup({
    name: new FormControl(),
    date: new FormControl(new Date()),
    weight: new FormControl(),
    sets: new FormControl(),
    repetition: new FormControl(),
  });
  constructor(private router: Router) {
    this.date = new Date();
  }

  ngOnInit(): void {
  }

  public save(): void {
    let data = this.workoutForm.value;
    data.date = data.date.toLocaleDateString();
    let lib = new localStorageDB("library", localStorage);
    if (lib.isNew()) {
      lib.createTable('workouts', ['name', 'weight', 'sets', 'repetition', 'date'])
      lib.commit();
    }
    lib.insert('workouts', data);
    lib.commit();
    this.router.navigate(['/home'])
  }
}
