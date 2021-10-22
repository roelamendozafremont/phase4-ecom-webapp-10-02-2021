import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CIUpdateComponent } from './update.component';

describe('CIUpdateComponent', () => {
  let component: CIUpdateComponent;
  let fixture: ComponentFixture<CIUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CIUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CIUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
