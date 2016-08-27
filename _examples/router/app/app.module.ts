import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import './rxjs-extensions';

import { AppComponent } from './app.component';
import { CharacterService } from './characters/character.service';
import { VehicleService } from './vehicles/vehicle.service';
import { routing, routableComponents } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  declarations: [AppComponent, ...routableComponents],
  providers: [CharacterService, VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
