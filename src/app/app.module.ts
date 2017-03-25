import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './_guards/auth.guard';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './_helpers/in-memory-data.service';

import { HeroService } from './_services/hero.service';

import { HeroSearchComponent } from './hero-search/hero-search.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
    // loading & configuring the in-memory web api
    InMemoryWebApiModule.forRoot(InMemoryDataService),

    AppRoutingModule,
    AlertModule.forRoot(),
    DatepickerModule.forRoot(),
  ],
  providers: [
    AuthGuard,
    HeroService,
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }
