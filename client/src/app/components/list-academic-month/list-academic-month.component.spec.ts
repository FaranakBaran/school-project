import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAcademicMonthComponent } from './list-academic-month.component';

describe('ListAcademicMonthComponent', () => {
  let component: ListAcademicMonthComponent;
  let fixture: ComponentFixture<ListAcademicMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAcademicMonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAcademicMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
