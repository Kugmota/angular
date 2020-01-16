import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotmanualComponent } from './notmanual.component';

describe('NotmanualComponent', () => {
  let component: NotmanualComponent;
  let fixture: ComponentFixture<NotmanualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotmanualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotmanualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
