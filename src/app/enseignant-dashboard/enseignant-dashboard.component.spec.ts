import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantDashboardComponent } from './enseignant-dashboard.component';

describe('EnseignantDashboardComponent', () => {
  let component: EnseignantDashboardComponent;
  let fixture: ComponentFixture<EnseignantDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnseignantDashboardComponent]
    });
    fixture = TestBed.createComponent(EnseignantDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
