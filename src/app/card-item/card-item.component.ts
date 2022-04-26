import { Component, EventEmitter, Input,  OnInit, Output } from '@angular/core';
import { Destination } from '../models/destination.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {
  @Input() item?: Destination;
  @Output() cardClick = new EventEmitter()
}
