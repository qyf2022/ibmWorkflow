import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../header/header.service';
import { ConstantService } from '../../services/constant.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-step-info',
  templateUrl: './step-info.component.html',
  styleUrls: ['./step-info.component.scss']
})
export class StepInfoComponent implements OnInit {

  noTrailingSlash: boolean = false;
  stepDetailData: any = null;

  constructor(public http: HttpClient, public _messageService: MessageService,
      public headService: HeaderService, public constantService: ConstantService){}

  ngOnInit(): void {
    let path = this.constantService.STEPS_DATA_PATH + "Step-" + this.headService.stepName + "/izu.zdf";
    // Load the data from izu.zdf file
    this.http.get(path).subscribe(data => {
      this.stepDetailData = JSON.stringify(data, null, 4);
    }, error => {
      console.log("An error happened when load the step detail info data.", error);
    });
  }

  goToHome() {
    this.headService.renderHome = true;
    this.headService.renderStepInfo = false;
    this.headService.stepName = null;
  }

}
