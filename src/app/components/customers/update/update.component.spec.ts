import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUpdateComponent } from './update.component';

describe('CUpdateComponent', () => {
  let component: CUpdateComponent;
  let fixture: ComponentFixture<CUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
