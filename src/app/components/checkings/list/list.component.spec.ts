import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingListComponent } from './list.component';

describe('CheckingListComponent', () => {
  let component: CheckingListComponent;
  let fixture: ComponentFixture<CheckingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
