import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiggerGallery } from './bigger-gallery';

describe('BiggerGallery', () => {
  let component: BiggerGallery;
  let fixture: ComponentFixture<BiggerGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiggerGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiggerGallery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
