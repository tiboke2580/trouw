import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodatieComponent } from './accomodatie.component';

describe('AccomodatieComponent', () => {
  let component: AccomodatieComponent;
  let fixture: ComponentFixture<AccomodatieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomodatieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomodatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
