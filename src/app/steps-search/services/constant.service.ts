import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  INDEX_STEP_NAME =  "stepName";
  INDEX_CREATOR =  "creator";
  INDEX_DESC =  "description";

  STEPS_DATA_PATH = "assets/STEPS-DATA/";
  
  constructor() { }
}