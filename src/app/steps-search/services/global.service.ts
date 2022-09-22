import { Injectable } from '@angular/core';
import { TableItem, TableModel } from 'carbon-components-angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  /**
   * Table search
   * Do the search in the search box
   * @param  value   search value in the search box
   * @param  allData data to be searched
   * @return TableItem[][] mathced rows data
   */
  searchValueChange(value: string, allData: TableItem[][]) {
    let matchedData: TableItem[][] = [];
    if (value != undefined && allData != undefined) {
      if (value === "") {
        matchedData = allData;
      } else {
        matchedData = allData.filter(data => this.isMatched(value, data)).
          map(filteredData => filteredData);
      }
    }
    return matchedData;
  }

  /**
  * Check whether data includes searchValue or filter
  * @param  value search content in the search box
  * @param  data          each table item in the table
  * @return               true if matched, false if not matched
  */
  private isMatched(value: string, data: TableItem[]): boolean {
    for (let i = 0; i < data.length; i++) {
      if (String(data[i]["data"]).toLowerCase().includes(value.toLowerCase())) { // only search column, not searh expanded data
        return true;
      }
    }
    return false;
  }
}
