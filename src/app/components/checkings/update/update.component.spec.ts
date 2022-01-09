import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingUpdateComponent } from './update.component';

describe('CheckingUpdateComponent', () => {
  let component: CheckingUpdateComponent;
  let fixture: ComponentFixture<CheckingUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckingUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
