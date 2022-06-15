import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-multiple-state',
  templateUrl: './multiple-state.component.html',
  styleUrls: ['./multiple-state.component.scss'],
  animations: [
    trigger('photoState', [
      state(
        'move',
        style({
          transform: 'translateX(-100%) translateY(50px)',
        })
      ),
      state(
        'enlarge',
        style({
          transform: 'scale(1.5)',
        })
      ),
      state(
        'spin',
        style({
          transform: 'rotateY(180deg) rotateZ(90deg)',
        })
      ),
      // without keyframes:
      transition('spin => move', animate('2000ms ease-out')),
      transition('* => *', animate('500ms ease')),

      // with keyframes:
      // transition(
      //   '* => *',
      //   animate(
      //     '2000ms',
      //     keyframes([
      //       style({ transform: 'translateX(0) rotateY(0)', offset: 0 }),
      //       style({
      //         transform: 'translateX(50%) rotateY(90deg)',
      //         offset: 0.33,
      //       }),
      //       style({
      //         transform: 'translateX(-75%) rotateY(180deg)',
      //         offset: 0.66,
      //       }),
      //       style({
      //         transform: 'translateX(100%)',
      //         offset: 1.0,
      //       }),
      //     ])
      //   )
      // ),
    ]),
  ],
})
export class MultipleStateComponent implements OnInit {
  position: string = '';

  constructor() {}
  ngOnInit(): void {}

  changePosition(newPosition: string) {
    this.position = newPosition;
  }
}
