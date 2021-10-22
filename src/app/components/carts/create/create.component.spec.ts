import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CICreateComponent } from './create.component';

describe('CICreateComponent', () => {
  let component: CICreateComponent;
  let fixture: ComponentFixture<CICreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CICreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CICreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
