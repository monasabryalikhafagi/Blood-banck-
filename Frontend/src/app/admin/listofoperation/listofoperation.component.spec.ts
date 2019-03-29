import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofoperationComponent } from './listofoperation.component';

describe('ListofoperationComponent', () => {
  let component: ListofoperationComponent;
  let fixture: ComponentFixture<ListofoperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofoperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
