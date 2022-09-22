<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepInfoComponent } from './step-info.component';

describe('StepInfoComponent', () => {
  let component: StepInfoComponent;
  let fixture: ComponentFixture<StepInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepInfoComponent } from './step-info.component';

describe('StepInfoComponent', () => {
  let component: StepInfoComponent;
  let fixture: ComponentFixture<StepInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 8fce99f3cb73487193747468a85b1d5ff508d4e1
