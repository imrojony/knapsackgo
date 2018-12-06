import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RojonyComponent } from './rojony.component';

describe('RojonyComponent', () => {
  let component: RojonyComponent;
  let fixture: ComponentFixture<RojonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RojonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RojonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
