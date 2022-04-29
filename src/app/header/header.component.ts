import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showSearchInput = false

  constructor(private location: Location, private router:Router) { }

  ngOnInit(): void {
    //TODO: Ideally we would use angular CDK like Portal to project the serach-input component here
    // this will make sure that the header component will stay clean and all the logic behind the search
    // input will be held to the concerned component in this case the resulsPageComponent
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.showSearchInput = this.router.url.includes('details')
        }
      }
    );
  }

}
