import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SalesComponent } from './sales/sales.component';
import { BookShipmentComponent } from './book-shipment/book-shipment.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
{
	path: '',
	component:HomepageComponent
},
{
	path: 'sales',
	component: SalesComponent
},
{
	path: 'bookShipment',
	component: BookShipmentComponent
},
{
	path: '**',
	component:PagenotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
