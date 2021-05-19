import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisionsdetailsComponent } from './televisionsdetails.component';

describe('TelevisionsdetailsComponent', () => {
  let component: TelevisionsdetailsComponent;
  let fixture: ComponentFixture<TelevisionsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelevisionsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelevisionsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
