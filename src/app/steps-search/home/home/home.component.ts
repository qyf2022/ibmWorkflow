<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../header/header.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // make an inquiry and launch github
  gitHub: string = "https://github.com/IBM-LBT/zmf_workflow_step_library";

  constructor(public _messageService: MessageService, public headService: HeaderService) { }

  ngOnInit(): void {
  }
  // open github in new tab
  // TODO
  launchGitHub() {
    window.open(this.gitHub);
  }

}
=======
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../header/header.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // make an inquiry and launch github
  gitHub: string = "https://github.com/IBM-LBT/zmf_workflow_step_library";

  constructor(public _messageService: MessageService, public headService: HeaderService) { }

  ngOnInit(): void {
  }
  // open github in new tab
  // TODO
  launchGitHub() {
    window.open(this.gitHub);
  }

}
>>>>>>> 8fce99f3cb73487193747468a85b1d5ff508d4e1
