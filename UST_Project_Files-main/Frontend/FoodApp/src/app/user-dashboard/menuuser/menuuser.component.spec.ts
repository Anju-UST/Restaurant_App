import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuuserComponent } from './menuuser.component';

describe('MenuuserComponent', () => {
  let component: MenuuserComponent;
  let fixture: ComponentFixture<MenuuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuuserComponent]
    });
    fixture = TestBed.createComponent(MenuuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
