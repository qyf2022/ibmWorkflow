import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsSearchComponent } from './steps-search.component';

describe('StepsSearchComponent', () => {
  let component: StepsSearchComponent;
  let fixture: ComponentFixture<StepsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
