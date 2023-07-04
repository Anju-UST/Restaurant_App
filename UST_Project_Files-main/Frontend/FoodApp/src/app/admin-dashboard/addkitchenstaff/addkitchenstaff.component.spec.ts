import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddkitchenstaffComponent } from './addkitchenstaff.component';

describe('AddkitchenstaffComponent', () => {
  let component: AddkitchenstaffComponent;
  let fixture: ComponentFixture<AddkitchenstaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddkitchenstaffComponent]
    });
    fixture = TestBed.createComponent(AddkitchenstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
