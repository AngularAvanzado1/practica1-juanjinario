import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RegionsService } from '../../services/regions.service';
import { Region, Country } from "@b-mundial/domain";
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bm-world-regions-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionsComponent implements OnInit {

  code;
  countries$;
  region$;

  constructor(private regionsService: RegionsService,
              private router: Router,
              private route: ActivatedRoute) {
    this.code = route.snapshot.params['code'];
  }

  ngOnInit() {
    this.region$ = this.regionsService.getRegion(this.code);
    this.countries$ = this.regionsService.getCountriesByRegion(this.code);
  }

  goToCountry(id) {
    this.router.navigate(['/country', id]);
  }

}
