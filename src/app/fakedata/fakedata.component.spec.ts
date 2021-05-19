import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakedataComponent } from './fakedata.component';

describe('FakedataComponent', () => {
  let component: FakedataComponent;
  let fixture: ComponentFixture<FakedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
