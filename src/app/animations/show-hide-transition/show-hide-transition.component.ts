import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-show-hide-transition',
  templateUrl: './show-hide-transition.component.html',
  styleUrls: ['./show-hide-transition.component.scss'],
  animations: [
    trigger('popOverState', [
      state(
        'show',
        style({
          opacity: 1,
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-out')),
    ]),
  ],
})
export class ShowHideTransitionComponent implements OnInit {
  show = false;
  constructor() {}

  ngOnInit(): void {}

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  toggle() {
    this.show = !this.show;
  }
}
