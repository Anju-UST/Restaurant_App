import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuupdateComponent } from './menuupdate.component';

describe('MenuupdateComponent', () => {
  let component: MenuupdateComponent;
  let fixture: ComponentFixture<MenuupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuupdateComponent]
    });
    fixture = TestBed.createComponent(MenuupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
