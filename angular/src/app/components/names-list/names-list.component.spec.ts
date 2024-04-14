import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameListComponent } from './names-list.component';

describe('NameListComponent', () => {
  let component: NameListComponent;
  let fixture: ComponentFixture<NameListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NameListComponent]
    });
    fixture = TestBed.createComponent(NameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
