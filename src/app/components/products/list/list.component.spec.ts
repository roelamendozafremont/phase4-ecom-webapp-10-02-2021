import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PListComponent } from './list.component';

describe('PListComponent', () => {
  let component: PListComponent;
  let fixture: ComponentFixture<PListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
