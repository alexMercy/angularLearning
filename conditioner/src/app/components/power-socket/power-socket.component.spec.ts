import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSocketComponent } from './power-socket.component';

describe('PowerSocketComponent', () => {
  let component: PowerSocketComponent;
  let fixture: ComponentFixture<PowerSocketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PowerSocketComponent]
    });
    fixture = TestBed.createComponent(PowerSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
