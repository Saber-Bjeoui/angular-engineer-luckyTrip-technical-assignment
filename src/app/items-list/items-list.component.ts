import { Component, Input, OnInit } from '@angular/core';
import { Destination } from '../models/destination.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {

  @Input() listTitle = 'Trending';
  @Input() items: Destination[] | null = []

}
