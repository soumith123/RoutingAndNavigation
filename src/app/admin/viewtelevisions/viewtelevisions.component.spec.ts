import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtelevisionsComponent } from './viewtelevisions.component';

describe('ViewtelevisionsComponent', () => {
  let component: ViewtelevisionsComponent;
  let fixture: ComponentFixture<ViewtelevisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtelevisionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtelevisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
