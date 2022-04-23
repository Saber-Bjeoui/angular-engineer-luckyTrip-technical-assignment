import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  bgImageUrl =  'url("../../../assets/images/background_1.png")';

  constructor() { }

  ngOnInit(): void {
  }

}
