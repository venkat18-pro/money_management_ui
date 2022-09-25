import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOutgoingComponent } from './create-outgoing.component';

describe('CreateOutgoingComponent', () => {
  let component: CreateOutgoingComponent;
  let fixture: ComponentFixture<CreateOutgoingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOutgoingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOutgoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
