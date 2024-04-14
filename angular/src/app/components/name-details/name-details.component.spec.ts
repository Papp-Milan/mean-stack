import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameDetailsComponent } from './name-details.component';

describe('NameDetailsComponent', () => {
  let component: NameDetailsComponent;
  let fixture: ComponentFixture<NameDetailsComponent>;
NameDetailsComponent
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NameDetailsComponent]
    });
    fixture = TestBed.createComponent(NameDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
