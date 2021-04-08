import { Component, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() {
    console.log('console testing ni constrture');
  }
  awb = '';
  ref = '';

  ngOnInit(): void {
    console.log('oninit triggered');
  }

}
