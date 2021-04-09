import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private ds:DataSharingService) {
    console.log('console testing ni constrture');
  }
  // awb = '';
  ref = '';
  searchResult:boolean = false;

  ngOnInit(): void {
    console.log('oninit triggered');
  }

  getData(val) {
    if(val == '020600138508') {
      console.log(this.ds.trackDetails(), 'ewe');
      this.searchResult = true;
    } else {
      this.searchResult = false;
    }
  }

}
