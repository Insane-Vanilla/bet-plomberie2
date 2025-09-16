import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCard2 } from './simple-card2';

describe('SimpleCard2', () => {
  let component: SimpleCard2;
  let fixture: ComponentFixture<SimpleCard2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleCard2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleCard2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
