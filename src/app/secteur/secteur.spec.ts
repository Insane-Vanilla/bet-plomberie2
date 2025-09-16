import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secteur } from './secteur';

describe('Secteur', () => {
  let component: Secteur;
  let fixture: ComponentFixture<Secteur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Secteur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Secteur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
