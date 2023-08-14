import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSchoolStaffPageComponent } from './login-school-staff-page.component';

describe('LoginSchoolStaffPageComponent', () => {
  let component: LoginSchoolStaffPageComponent;
  let fixture: ComponentFixture<LoginSchoolStaffPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSchoolStaffPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSchoolStaffPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
