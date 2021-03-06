import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { HeaderComponent } from './header/header.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CardItemComponent } from './card-item/card-item.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    HeaderComponent,
    SearchPageComponent,
    CardItemComponent,
    FirstSectionComponent,
    ItemsListComponent,
    LoaderComponent,
    ResultsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
