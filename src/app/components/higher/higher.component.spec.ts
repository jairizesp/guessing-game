import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherComponent } from './higher.component';

describe('HigherComponent', () => {
  let component: HigherComponent;
  let fixture: ComponentFixture<HigherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HigherComponent]
    });
    fixture = TestBed.createComponent(HigherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
