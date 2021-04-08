import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mobile = false;
  constructor(private ds:DataSharingService) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.mobile = !this.mobile;
    this.ds.toogleSate(this.mobile);
  }

}
