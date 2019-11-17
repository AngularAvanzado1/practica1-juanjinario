import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RegionsService } from '../../services/regions.service';
import { Region } from "@b-mundial/domain";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'bm-world-regions-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  regions$;

  constructor(private regionsService: RegionsService,
              private router: Router) { }

  ngOnInit() {
    this.regions$ = this.regionsService.getRegions();
  }

  goToRegion(id) {
    this.router.navigate(['/region', id]);
  }

}
