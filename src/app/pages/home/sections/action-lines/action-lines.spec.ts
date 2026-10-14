import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionLines } from './action-lines';

describe('ActionLines', () => {
  let component: ActionLines;
  let fixture: ComponentFixture<ActionLines>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionLines],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionLines);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
