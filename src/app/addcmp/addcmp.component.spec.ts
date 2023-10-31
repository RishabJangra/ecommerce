import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcmpComponent } from './addcmp.component';

describe('AddcmpComponent', () => {
  let component: AddcmpComponent;
  let fixture: ComponentFixture<AddcmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcmpComponent]
    });
    fixture = TestBed.createComponent(AddcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
