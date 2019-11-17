import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RegionsService } from '../../services/regions.service';
import { Region, Country } from "@b-mundial/domain";
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'bm-world-regions-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryComponent implements OnInit {

  id;
  country$;

  constructor(private countriesService: CountriesService,
              private router: Router,
              private route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.country$ = this.countriesService.getCountry(this.id);
  }

}
