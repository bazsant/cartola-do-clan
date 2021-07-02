import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule, Routes } from '@angular/router';

import {MatCardModule} from '@angular/material/card';

import { RegrasComponent } from './regras/regras.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ConfrontosComponent } from './confrontos/confrontos.component';
import { CampeoesComponent } from './campeoes/campeoes.component';

const routes: Routes = [
  { path: '', component: RegrasComponent },
  { path: 'confrontos', component: ConfrontosComponent },
  { path: 'campeoes', component: CampeoesComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegrasComponent,
    NotFoundComponent,
    HomeComponent,
    HeaderComponent,
    ConfrontosComponent,
    CampeoesComponent,
  ],
  imports: [
    BrowserModule, 
    NgbModule, 
    RouterModule.forRoot(routes), 
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
