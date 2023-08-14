import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStudentPageComponent } from './login-student-page.component';

describe('LoginStudentPageComponent', () => {
  let component: LoginStudentPageComponent;
  let fixture: ComponentFixture<LoginStudentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginStudentPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginStudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
