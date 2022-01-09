import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingUpdateComponent } from './update.component';

describe('SavingUpdateComponent', () => {
  let component: SavingUpdateComponent;
  let fixture: ComponentFixture<SavingUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavingUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
