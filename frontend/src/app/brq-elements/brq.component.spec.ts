import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrqComponent } from './brq.component';

describe('BrqComponent', () => {
  let component: BrqComponent;
  let fixture: ComponentFixture<BrqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
