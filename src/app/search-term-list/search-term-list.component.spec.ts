import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTermListComponent } from './search-term-list.component';

describe('SearchTermListComponent', () => {
  let component: SearchTermListComponent;
  let fixture: ComponentFixture<SearchTermListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTermListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTermListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
