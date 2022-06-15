import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleStateComponent } from './multiple-state.component';

describe('MultipleStateComponent', () => {
  let component: MultipleStateComponent;
  let fixture: ComponentFixture<MultipleStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
