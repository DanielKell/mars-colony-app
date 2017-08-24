import { Component } from '@angular/core';
//This component pulls the template to load the website from

import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  query,
} from '@angular/animations';


export const routerTransition = trigger('routerTransition', [ //linked to the name in app.component.html

    transition('welcome <=> register', [
    query (':enter, :leave', style({ position: 'fixed', width: '100%'}) //On enter and leave, do these things
    , {optional: true}), //Only do the animation if it's successful
    group([
      query(':enter', [
        style({transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
      ], {optional: true}),
      query(':leave', [
        style({transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
      ], {optional: true}),
    ])
  ]), 
  
  transition('* <=> *', [
    query (':enter, :leave', style({ position: 'fixed', width: '100%'}) //On enter and leave, do these things
    , {optional: true}), //Only do the animation if it's successful
    group([
      query(':enter', [
        style({transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
      ], {optional: true}),
      query(':leave', [
        style({transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
      ], {optional: true}),
    ])
  ]) //Can replace * to a specific route, but this creates the animation on ALL transitions


]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition],
})
export class AppComponent {
  getState(outlet) { //Used for routing between sections. Finds the label stated in AppRoutes 
    return outlet.activatedRouteData.state;
  }
}
