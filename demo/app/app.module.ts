import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MeepoFormsModule } from '../../src/app/app';
import { MeepoBmapModule } from 'meepo-bmap';
import { MeepoCoreModule } from 'meepo-core';
import { UuidModule } from 'meepo-uuid';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MeepoFormsModule,
    MeepoBmapModule.forRoot(),
    MeepoCoreModule.forRoot(),
    UuidModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

