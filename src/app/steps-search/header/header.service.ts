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
