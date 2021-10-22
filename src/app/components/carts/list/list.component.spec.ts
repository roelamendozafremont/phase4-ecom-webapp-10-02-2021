import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CIListComponent } from './list.component';

describe('PListComponent', () => {
  let component: CIListComponent;
  let fixture: ComponentFixture<CIListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CIListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CIListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
