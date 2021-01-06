import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {NewWorkoutComponent} from './components/new-workout/new-workout.component';
import {StatisticsComponent} from './components/statistics/statistics.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'new-workout', component: NewWorkoutComponent},
  { path: 'statistics', component: StatisticsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
