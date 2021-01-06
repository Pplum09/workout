import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { NewWorkoutComponent } from './components/new-workout/new-workout.component';
import {CalendarModule} from 'primeng/calendar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import {RippleModule} from 'primeng/ripple';
import {CardModule} from 'primeng/card';
import {InputNumberModule} from 'primeng/inputnumber';
import {DividerModule} from 'primeng/divider';
import {SidebarModule} from 'primeng/sidebar';
import {TabMenuModule} from 'primeng/tabmenu';
import { StatisticsComponent } from './components/statistics/statistics.component';
import {ChartModule} from 'primeng/chart';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent,
    NewWorkoutComponent,
    HomeComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule,
    RippleModule,
    CardModule,
    InputNumberModule,
    DividerModule,
    ReactiveFormsModule,
    SidebarModule,
    TabMenuModule,
    ChartModule,
    ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
