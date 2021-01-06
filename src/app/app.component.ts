import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workout-ui';
  public items: MenuItem[] = [
      {icon: 'pi pi-fw pi-home', routerLink: ['/']},
      {icon: 'pi pi-fw pi-plus', routerLink: ['/new-workout']},
      {icon: 'pi pi-fw pi-chart-line', routerLink: ['/statistics']},
  ];
}
