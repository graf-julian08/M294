import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDirective } from './data-directive';

describe('DataDirective', () => {
  let component: DataDirective;
  let fixture: ComponentFixture<DataDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDirective);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
