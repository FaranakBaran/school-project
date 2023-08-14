import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInSchoolStaffComponent } from './sign-up-school-staff.component';

describe('SignInSchoolStaffComponent', () => {
  let component: SignInSchoolStaffComponent;
  let fixture: ComponentFixture<SignInSchoolStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInSchoolStaffComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SignInSchoolStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
