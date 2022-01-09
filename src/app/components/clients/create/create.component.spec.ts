import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCreateComponent } from './create.component';

describe('ClientCreateComponent', () => {
  let component: ClientCreateComponent;
  let fixture: ComponentFixture<ClientCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
