<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ButtonModule, CheckboxModule, CodeSnippetModule, DialogModule, ModalModule, PaginationModule, TableModule, TagModule } from 'carbon-components-angular';
import { IndexTableComponent } from './index-table/index-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { DownloadModule, ExportModule, LaunchModule, ResetModule, SettingsAdjustModule } from '@carbon/icons-angular';



@NgModule({
  declarations: [
    HomeComponent,
    IndexTableComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    LaunchModule,
    TableModule,
    PaginationModule,
    BrowserModule,
    CodeSnippetModule,
    TagModule,
    ModalModule,
    SettingsAdjustModule,
    DialogModule, // over flow meau in it
    CheckboxModule,
    ResetModule,
    DownloadModule
  ]
})
export class HomeModule { }
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ButtonModule, CheckboxModule, CodeSnippetModule, DialogModule, ModalModule, PaginationModule, TableModule, TagModule } from 'carbon-components-angular';
import { IndexTableComponent } from './index-table/index-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { DownloadModule, ExportModule, LaunchModule, ResetModule, SettingsAdjustModule } from '@carbon/icons-angular';



@NgModule({
  declarations: [
    HomeComponent,
    IndexTableComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    LaunchModule,
    TableModule,
    PaginationModule,
    BrowserModule,
    CodeSnippetModule,
    TagModule,
    ModalModule,
    SettingsAdjustModule,
    DialogModule, // over flow meau in it
    CheckboxModule,
    ResetModule,
    DownloadModule
  ]
})
export class HomeModule { }
>>>>>>> 8fce99f3cb73487193747468a85b1d5ff508d4e1
