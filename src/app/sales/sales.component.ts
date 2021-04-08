import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  cname = '';
  acc = '';
  sales = '';
  cust = '';

  constructor() { }

  ngOnInit(): void {
  }

}
