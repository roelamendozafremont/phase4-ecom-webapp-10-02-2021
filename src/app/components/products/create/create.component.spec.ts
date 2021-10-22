import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCreateComponent } from './create.component';

describe('PCreateComponent', () => {
  let component: PCreateComponent;
  let fixture: ComponentFixture<PCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
