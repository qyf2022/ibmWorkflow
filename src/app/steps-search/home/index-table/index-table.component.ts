import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableHeaderItem, TableItem, TableModel } from 'carbon-components-angular';
import { TranslateService } from '@ngx-translate/core';
import { ConstantService } from '../../services/constant.service';
import { MessageService } from '../../services/message.service';
import { HttpClient } from '@angular/common/http';
import { HeaderService } from '../../header/header.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-index-table',
  templateUrl: './index-table.component.html',
  styleUrls: ['./index-table.component.scss']
})
export class IndexTableComponent implements OnInit {

  @Input() id = "index-table";
  @Input() model = new TableModel();
  @Input() size = 'md';
  @Input() showSelectionColumn = true;
  @Input() striped = false;
  @Input() isDataGrid = false;

  @Input() toolbar = true;
  @Input() theme = 'dark';
  @Input() placeholder = 'Search';
  @Input() autocomplete = 'off';
  @Input() disabled = false;
  @Input() searchsize = 'lg';
  @Input() searchDomValue = "";
  @Input() sortable = true;

  @Input() ghost = "ghost";
  @Input() bottom = "bottom";

  @ViewChild("expandedPaneTemplate", { static: true }) protected expandedPaneTemplate: TemplateRef<any>;
  @ViewChild('customTableItemTemplateExport', { read: TemplateRef, static: false }) customTableItemTemplateExport: TemplateRef<any>;
  // columns
  stepName: string = "";
  creator: string = "";
  description: string = "";

  allData: TableItem[][] = []; // all table rows data
  searchMatchedData: TableItem[][] = []; // matched data of search
  dataToConstrutPages: TableItem[][] = []; // data used to construct pages after filter or search performed
  indexData: any = [ // get these data from the json file

  ];

  selectedRowsData: TableItem[][] = []; // selected row data

  constructor(public translate: TranslateService, public constantService: ConstantService,
    public _messageService: MessageService, public http: HttpClient, public headService: HeaderService,
    public globals: GlobalService) { }

  ngOnInit(): void {
    // Get the columns name from the en.json
    this.translate.get('BUNDLE').subscribe(res => {
      this.stepName = res.HOME_TABLE_STEP_NAME;
      this.creator = res.HOME_TABLE_CREATOR;

      this.model.header = [
        new TableHeaderItem({ // step name
          data: this.stepName,
          style: { 'z-Index': '9999px' },
          sortable: true,
        }),
        new TableHeaderItem({ // creator
          data: this.creator,
          style: { 'z-Index': '9999px' },
          sortable: false,
        }),
        new TableHeaderItem({ // download 
          data: "",
          style: { 'z-Index': '9999px' },
          sortable: false
        }),
        new TableHeaderItem({ // description 
          data: this.description,
          style: { 'z-Index': '9999px' },
          sortable: false,
          visible: false // not visible
        })
      ]
    });

    // Load the data from izu.zdf file
    let path = this.constantService.STEPS_DATA_PATH + "izu.zdf";
    this.http.get(path).subscribe(data => {
      this.indexData = data["public"]["stepList"];

      // construct all table rows data from json data
      this.allData = this.prepareData(this.indexData);
      this.dataToConstrutPages = this.allData; // default to all rows data

      this.model.pageLength = 10;
      this.model.totalDataLength = this.allData.length;
      this.selectPage(1);

    }, error => {
      console.log("An error happened when load the step data.", error);
    });
  }

  // Sub the description, only display 218 chars
  subDesc(description: string) {
    let res: string = description;
    if (description != "" && description != undefined) {
      if (description.length > 218) {
        res = description.substring(0, 219) + "...";
      }
    }
    return res;
  }

  // the data is all of the package data
  goToStepInfo(stepName: string) {
    this.headService.renderHome = false;
    this.headService.renderStepInfo = true;
    this.headService.stepName = stepName;
  }

  // get one page data from the searchMatchedData or filterMatchedData or allData
  getPage(page: number) {
    const fullPage = [];

    for (let i = (page - 1) * this.model.pageLength; i < page * this.model.pageLength && i < this.model.totalDataLength; i++) {
      fullPage.push(this.dataToConstrutPages[i]);
    }

    return new Promise(resolve => {
      setTimeout(() => resolve(fullPage), 150);
    });
  }

  selectPage(page) {
    this.getPage(page).then((data: TableItem[][]) => {
      // set the data and update page
      this.model.data = data;
      this.model.currentPage = page;

      // sort page data. when go to next page, sort page data, if name column sort selected
      if (this.model.header[0].sorted) { 
       this.model.sort(0);
      }
      
    });
  }

  protected prepareData(data: any) {
    // create new data from the service data
    let items: TableItem[][] = [];

    // 
    for(let key in data) {
      let stepName = key;
      let description = data[key]["description"];
      let creator = data[key]["creator"];

      // construct expanded data
      let expandedData = {"description": description, "stepName": stepName};

      items.push([
        new TableItem({
          data: stepName ? stepName : "", key: this.constantService.INDEX_STEP_NAME,
          expandedData: expandedData ? expandedData : null,
          expandedTemplate: this.expandedPaneTemplate
        }),
        new TableItem({
          data: creator ? creator : null,
          key: this.constantService.INDEX_CREATOR
        }),
        new TableItem({
          data: stepName ? stepName : "", key: this.constantService.INDEX_STEP_NAME,
          template: this.customTableItemTemplateExport
        }),
        new TableItem({
          data: description ? description : null,
          key: this.constantService.INDEX_DESC
        }),
      ]);
    }
    return items;
  }

  /**
   * Respond to change of search value 
   * Search function
   * @param searchValue event
   */
  searchValueChange(searchValue: string) {
    let dataToBeSearched: TableItem[][] = [];
    dataToBeSearched = this.allData;
    
    this.searchMatchedData = this.globals.searchValueChange(searchValue, dataToBeSearched);
    // re-conuage page data
    this.dataToConstrutPages = this.searchMatchedData;
    this.model.totalDataLength = this.dataToConstrutPages.length;
    this.selectPage(1);
  }


  /**
   * Clear table search action
   */
  clearSearchValue() {
    this.searchDomValue = "";
    this.searchMatchedData = []; // clear search matched data

    this.dataToConstrutPages = this.allData;
    
    // re-conuage page data
    this.model.totalDataLength = this.dataToConstrutPages.length;
    this.selectPage(1);
  }

  overflowOnClick = (event: any) => {
    event.stopPropagation();
  }

  customSort(index: number) {
		this.sort(this.model, index);
	}

  sort(model, index: number) {
		if (model.header[index].sorted) {
			// if already sorted flip sorting direction
			model.header[index].ascending = model.header[index].descending;
		}
		model.sort(index);
	}

  // export the izu.zdf file
  downloadData(stepName: string) {
    let path = this.constantService.STEPS_DATA_PATH + "Step-" + stepName + "/izu.zdf";
    // Load the data from izu.zdf file
    this.http.get(path).subscribe(data => {
      this.downloadIzuZdfFile(data, stepName);
    }, error => {
      console.log("An error happened when download the step izu.zdf data.", error);
    });
  }

  downloadIzuZdfFile(data: any, stepName: string) {
    //Download the izu.zdf file.
    let blob = new Blob(['\ufeff' + JSON.stringify(data, null, 4)], { type: 'application/json;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
        dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", stepName + ".zdf");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink); 
  }

  /**
   * Get Selected rows data
   * @param rowsSelected selected rows
   * @param modalData this.modal.datas
   */
  getSelectedRowsData(rowsSelected: boolean[], modalData: TableItem[][]) {
    let selectedRowsData = [];
    for(let index in rowsSelected) {
      if(rowsSelected[index]) {
        selectedRowsData.push(modalData[index]);
      }
    }
    return selectedRowsData;
  }

  /**
   * Tool bar Export button is clicked.
   */
  exportSelectedRows() {
    // get the selected rows data
    this.selectedRowsData = this.getSelectedRowsData(this.model.rowsSelected, this.model.data); // get all the selected row data
    
    // get the step name and download the izu.zdf
    for(let i = 0; i <= this.selectedRowsData.length - 1; i++) {
      let stepName = this.selectedRowsData[i][0]['data'];
      this.downloadData(stepName);
    }
  }
}
