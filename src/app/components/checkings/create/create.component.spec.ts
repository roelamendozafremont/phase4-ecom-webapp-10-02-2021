import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingCreateComponent } from './create.component';

describe('CheckingCreateComponent', () => {
  let component: CheckingCreateComponent;
  let fixture: ComponentFixture<CheckingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckingCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
