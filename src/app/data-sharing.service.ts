import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  trackFullDetails:any = {
    awb: '020600138508',
    tracking: [{
      status:'Checked in at local station: DXB 16/02/2021'
    },
    {
      status:'Checked in at local station: AMM 16/02/2021'
    },
    {
      status:'Checked out from local station: DXB 16/02/2021'
    },
    {
      status:'Checked out from local station: AMM 16/02/2021'
    }],
    tableData:[{
      in: 'Summary 9646',
      out: '',
      info: ''
    },
    {
      in: 'Flight',
      out: 'Flight',
      info: '00'
    },
    {
      in: 'Date',
      out: 'Date',
      info: '16/02/2021'
    },
    {
      in: 'MAWB',
      out: 'MAWB',
      info: '803421595184'
    },
    {
      in: 'Origin',
      out: 'Dest',
      info: 'DXB'
    }],
    date: '10-04-2021',
    time: '10.00 AM',
    accno: 'R44891',
    cogsignref:'',
    cosigner:'CASH',
    cosigneradd:'Amman shamisani abed al hammed',
    cosigncntry: 'india',
    phone: '65662840',
    fax: '65662830',
    czip: '6702',
    cemail:'skynetamm2@glf.com.jo'
  };

  private toggleStatus = new BehaviorSubject<boolean>(false);
  public toggleStatus$ = this.toggleStatus.asObservable();

  constructor(private http:HttpClient) { }

  toogleSate(val) {
    this.toggleStatus.next(val);
  }

  trackDetails() {
    return this.trackFullDetails;
  }
}
