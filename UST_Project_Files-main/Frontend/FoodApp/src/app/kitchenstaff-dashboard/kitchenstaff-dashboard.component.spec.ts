import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenstaffDashboardComponent } from './kitchenstaff-dashboard.component';

describe('KitchenstaffDashboardComponent', () => {
  let component: KitchenstaffDashboardComponent;
  let fixture: ComponentFixture<KitchenstaffDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitchenstaffDashboardComponent]
    });
    fixture = TestBed.createComponent(KitchenstaffDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
