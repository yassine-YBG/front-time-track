import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyEmploiComponent } from './modify-emploi.component';

describe('ModifyEmploiComponent', () => {
  let component: ModifyEmploiComponent;
  let fixture: ComponentFixture<ModifyEmploiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyEmploiComponent]
    });
    fixture = TestBed.createComponent(ModifyEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
