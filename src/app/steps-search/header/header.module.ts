<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UIShellModule } from 'carbon-components-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { HeaderService } from './header.service';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    UIShellModule,
    HttpClientModule,
    TranslateModule
  ],
  providers: [ HeaderService ]
})
export class HeaderModule { }
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UIShellModule } from 'carbon-components-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { HeaderService } from './header.service';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    UIShellModule,
    HttpClientModule,
    TranslateModule
  ],
  providers: [ HeaderService ]
})
export class HeaderModule { }
>>>>>>> 8fce99f3cb73487193747468a85b1d5ff508d4e1
