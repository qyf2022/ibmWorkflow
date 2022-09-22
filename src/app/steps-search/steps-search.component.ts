<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ModalService } from 'carbon-components-angular';
import { HeaderService } from './header/header.service';

@Component({
  selector: 'app-steps-search',
  templateUrl: './steps-search.component.html',
  styleUrls: ['./steps-search.component.scss']
})
export class StepsSearchComponent implements OnInit {

  constructor(public headService: HeaderService, public modalService: ModalService,) { }

  ngOnInit(): void {
    
  }

  renderHome() {
    return this.headService.renderHome;
  }

  renderStepInfo() {
    return this.headService.renderStepInfo;
  }

}
=======
import { Component, OnInit } from '@angular/core';
import { ModalService } from 'carbon-components-angular';
import { HeaderService } from './header/header.service';

@Component({
  selector: 'app-steps-search',
  templateUrl: './steps-search.component.html',
  styleUrls: ['./steps-search.component.scss']
})
export class StepsSearchComponent implements OnInit {

  constructor(public headService: HeaderService, public modalService: ModalService,) { }

  ngOnInit(): void {
    
  }

  renderHome() {
    return this.headService.renderHome;
  }

  renderStepInfo() {
    return this.headService.renderStepInfo;
  }

}
>>>>>>> 8fce99f3cb73487193747468a85b1d5ff508d4e1
