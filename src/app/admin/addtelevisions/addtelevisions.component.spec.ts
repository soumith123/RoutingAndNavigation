import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtelevisionsComponent } from './addtelevisions.component';

describe('AddtelevisionsComponent', () => {
  let component: AddtelevisionsComponent;
  let fixture: ComponentFixture<AddtelevisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtelevisionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtelevisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
