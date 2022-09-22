<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { StepInfoObject } from '../home/model/StepInfoObject';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  renderHome:boolean = true;
  renderStepInfo:boolean = false;
  stepName: string = null;

  constructor() { }
}
=======
import { Injectable } from '@angular/core';
import { StepInfoObject } from '../home/model/StepInfoObject';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  renderHome:boolean = true;
  renderStepInfo:boolean = false;
  stepName: string = null;

  constructor() { }
}
>>>>>>> 8fce99f3cb73487193747468a85b1d5ff508d4e1
