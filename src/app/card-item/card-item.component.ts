import { Component, Input, OnInit } from '@angular/core';
import { Destination } from '../models/destination.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() item?: Destination;

  constructor() { }

  ngOnInit(): void {
  }

}
