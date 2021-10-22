import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCreateComponent } from './create.component';

describe('CCreateComponent', () => {
  let component: CCreateComponent;
  let fixture: ComponentFixture<CCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
