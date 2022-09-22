import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepInfoComponent } from './step-info/step-info.component';
import { BreadcrumbModule, CodeSnippetModule, StructuredListModule, TagModule } from 'carbon-components-angular';
import { LaunchModule } from '@carbon/icons-angular';



@NgModule({
  declarations: [
    StepInfoComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    TagModule,
    StructuredListModule,
    LaunchModule,
    CodeSnippetModule
  ],
  exports: [
    StepInfoComponent
  ]
})
export class StepInfoModule { }
