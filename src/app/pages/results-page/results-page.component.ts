import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationsService } from 'src/app/destinations.service';
import { LoaderService } from 'src/app/loader.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: [ '../search-page/search-page.component.scss', './results-page.component.scss']
})
export class ResultsPageComponent {

  constructor(
    private service: DestinationsService,
    public loader: LoaderService,
    private route: ActivatedRoute
    ) { }

  destinationId = this.route.snapshot.params['id']
  destination$ =  this.service.getDestinationById$(this.destinationId)
}
