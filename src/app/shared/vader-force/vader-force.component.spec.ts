import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaderForceComponent } from './vader-force.component';

describe('VaderForceComponent', () => {
  let component: VaderForceComponent;
  let fixture: ComponentFixture<VaderForceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaderForceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaderForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
