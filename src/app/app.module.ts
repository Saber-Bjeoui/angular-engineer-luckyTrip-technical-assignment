import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { HeaderComponent } from './header/header.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CardItemComponent } from './card-item/card-item.component';
import { FirstSectionComponent } from './first-section/first-section.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    HeaderComponent,
    SearchPageComponent,
    CardItemComponent,
    FirstSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
