import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTextComponent } from './display-text.component';

describe('DisplayTextComponent', () => {
  let component: DisplayTextComponent;
  let fixture: ComponentFixture<DisplayTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DisplayTextComponent]
    });
    fixture = TestBed.createComponent(DisplayTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
