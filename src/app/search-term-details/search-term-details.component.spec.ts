import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTermDetailsComponent } from './search-term-details.component';

describe('SearchTermDetailsComponent', () => {
  let component: SearchTermDetailsComponent;
  let fixture: ComponentFixture<SearchTermDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTermDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTermDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
