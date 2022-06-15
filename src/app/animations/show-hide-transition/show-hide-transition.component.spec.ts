import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHideTransitionComponent } from './show-hide-transition.component';

describe('ShowHideTransitionComponent', () => {
  let component: ShowHideTransitionComponent;
  let fixture: ComponentFixture<ShowHideTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowHideTransitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowHideTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
