import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingListComponent } from './list.component';

describe('SavingListComponent', () => {
  let component: SavingListComponent;
  let fixture: ComponentFixture<SavingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
