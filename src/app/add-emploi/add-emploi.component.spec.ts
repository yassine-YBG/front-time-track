import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmploiComponent } from './add-emploi.component';

describe('AddEmploiComponent', () => {
  let component: AddEmploiComponent;
  let fixture: ComponentFixture<AddEmploiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEmploiComponent]
    });
    fixture = TestBed.createComponent(AddEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
