import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsSearchComponent } from './steps-search.component';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { StepInfoModule } from './step-info/step-info.module';
import { PlaceholderModule } from 'carbon-components-angular';



@NgModule({
  declarations: [
    StepsSearchComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    HomeModule,
    StepInfoModule,
    PlaceholderModule
  ],
  exports: [
    StepsSearchComponent
  ],
})
export class StepsSearchModule { }
