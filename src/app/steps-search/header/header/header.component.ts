import { Component, HostBinding, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // adds padding to the top of the document, so the content is below the header
  @HostBinding('class.bx--header') headerClass = true;
  
  constructor(public _messageService: MessageService,
     public headService: HeaderService) { }

  ngOnInit(): void {
  }

  onRenderHome() {
    this.headService.renderHome = true;
    this.headService.renderStepInfo = false;
    this.headService.stepName = null;
  }

}
