import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('photosAnimation', [
      transition('* => *', [
        query('div', style({ transform: 'translateX(-100%)' })),
        query(
          'div',
          stagger('600ms', [
            animate('900ms', style({ transform: 'translateX(0)' })),
          ])
        ),
      ]),
    ]),
  ],
})
export class ListComponent implements OnInit {
  photos: string[] = ['test one', 'test two', 'test three'];
  constructor() {}

  ngOnInit(): void {}
}
