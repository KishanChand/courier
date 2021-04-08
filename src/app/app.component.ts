import { Component, OnInit } from '@angular/core';
import { DataSharingService } from './data-sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  collapseStatus:boolean;
  constructor(private ds:DataSharingService) {}
  title = 'sample';

  ngOnInit() {
    this.ds.toggleStatus$.subscribe(x => {
      this.collapseStatus = x;
    });
  }
}
