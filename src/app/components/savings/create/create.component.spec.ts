import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingCreateComponent } from './create.component';

describe('SavingCreateComponent', () => {
  let component: SavingCreateComponent;
  let fixture: ComponentFixture<SavingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavingCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
