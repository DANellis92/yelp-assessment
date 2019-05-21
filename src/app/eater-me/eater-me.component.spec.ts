import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EaterMeComponent } from './eater-me.component';

describe('EaterMeComponent', () => {
  let component: EaterMeComponent;
  let fixture: ComponentFixture<EaterMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EaterMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EaterMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
