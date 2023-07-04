import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificmenuComponent } from './specificmenu.component';

describe('SpecificmenuComponent', () => {
  let component: SpecificmenuComponent;
  let fixture: ComponentFixture<SpecificmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificmenuComponent]
    });
    fixture = TestBed.createComponent(SpecificmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
