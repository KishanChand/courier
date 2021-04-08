import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private toggleStatus = new BehaviorSubject<boolean>(false);
  public toggleStatus$ = this.toggleStatus.asObservable();

  constructor(private http:HttpClient) { }

  toogleSate(val) {
    this.toggleStatus.next(val);
  }
}
