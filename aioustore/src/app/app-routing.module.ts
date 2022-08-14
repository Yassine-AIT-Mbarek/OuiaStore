import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarteVisiteComponent } from './add-carte-visite/add-carte-visite.component';
import { ListeDesClientsComponent } from './liste-des-clients/liste-des-clients.component';
import { LOGINComponent } from './log-in/log-in.component';
import { ResgisterComponent } from './resgister/resgister.component';
import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { DetailComponent } from './detail/detail.component';
import { FooterComponent } from './footer/footer.component';
import { DetailBillBoardsComponent } from './detail-bill-boards/detail-bill-boards.component';
import { DetailFrontSignsComponent } from './detail-front-signs/detail-front-signs.component';
const routes: Routes = [
  {component : AddCarteVisiteComponent ,
  path:'add'},
  
  {component : ListeDesClientsComponent,
  path:'liste'},

  {component : LOGINComponent,
  path:'log'
  },

  {
  component : ResgisterComponent,
  path:'reg'
  },
  
  {
    component : HomeComponent,
    path:'home'
  },
  {
    component : BuyComponent,
    path: 'buy'
  },
  {
    component : DetailComponent,
    path : 'detail'
  },
  {
    component : FooterComponent ,
    path : 'footer'
  },
  {
    component : DetailFrontSignsComponent,
    path : 'detail-f'
  },
  {
    component : DetailBillBoardsComponent,
    path : 'detail-b'
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
