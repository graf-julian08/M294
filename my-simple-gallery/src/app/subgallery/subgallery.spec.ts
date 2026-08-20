import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subgallery } from './subgallery';

describe('Subgallery', () => {
  let component: Subgallery;
  let fixture: ComponentFixture<Subgallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subgallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subgallery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
