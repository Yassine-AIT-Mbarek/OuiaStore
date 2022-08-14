import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NAVEComponent } from './nave/nave.component';
import { LOGINComponent } from './log-in/log-in.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddCarteVisiteComponent } from './add-carte-visite/add-carte-visite.component';
import { ListeDesClientsComponent } from './liste-des-clients/liste-des-clients.component';
import { ResgisterComponent } from './resgister/resgister.component';
import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { DetailBillBoardsComponent } from './detail-bill-boards/detail-bill-boards.component';
import { DetailFrontSignsComponent } from './detail-front-signs/detail-front-signs.component';

@NgModule({
  declarations: [
    AppComponent,
    NAVEComponent,
    LOGINComponent,
    AddCarteVisiteComponent,
    ListeDesClientsComponent,
    ResgisterComponent,
    HomeComponent,
    BuyComponent,
    DetailComponent,
    FooterComponent,
    DetailBillBoardsComponent,
    DetailFrontSignsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
