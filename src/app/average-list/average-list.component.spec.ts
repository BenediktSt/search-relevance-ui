import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageListComponent } from './average-list.component';

describe('AverageListComponent', () => {
  let component: AverageListComponent;
  let fixture: ComponentFixture<AverageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
