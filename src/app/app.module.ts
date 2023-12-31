import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { IndiaComponent } from './india/india.component';
import { TsComponent } from './ts/ts.component';
import { UpComponent } from './up/up.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    IndiaComponent,
    TsComponent,
    UpComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
