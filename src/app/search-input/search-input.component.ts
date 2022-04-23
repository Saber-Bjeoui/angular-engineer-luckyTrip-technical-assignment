import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  @Input() placeholder = 'Search ...';
  @Output() btnClick = new EventEmitter();

  public searchValue = '';

  onClick() {
    this.btnClick.emit(this.searchValue)
  }

}
