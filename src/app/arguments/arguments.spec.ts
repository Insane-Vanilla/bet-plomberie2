import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arguments } from './arguments';

describe('Arguments', () => {
  let component: Arguments;
  let fixture: ComponentFixture<Arguments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Arguments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arguments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
