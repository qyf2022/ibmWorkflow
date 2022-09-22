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
