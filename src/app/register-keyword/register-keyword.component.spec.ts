import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterKeywordComponent } from './register-keyword.component';

describe('RegisterKeywordComponent', () => {
  let component: RegisterKeywordComponent;
  let fixture: ComponentFixture<RegisterKeywordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterKeywordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
