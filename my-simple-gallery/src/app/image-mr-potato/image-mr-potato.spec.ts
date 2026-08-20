import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageMrPotato } from './image-mr-potato';

describe('ImageMrPotato', () => {
  let component: ImageMrPotato;
  let fixture: ComponentFixture<ImageMrPotato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageMrPotato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageMrPotato);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
