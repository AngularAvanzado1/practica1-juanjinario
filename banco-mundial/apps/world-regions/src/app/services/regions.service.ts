import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Region, Country } from "@b-mundial/domain";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  private regions$: BehaviorSubject<Region[]>;
  private countries$: BehaviorSubject<Country[]>;
  private apiUrl = 'http://api.worldbank.org/v2/region/?format=json';

  constructor(private httpClient: HttpClient) {
    this.regions$ = new BehaviorSubject(null);
    this.countries$ = new BehaviorSubject(null);
  }

  public getRegions(): Observable<Region[]> {
    this.httpClient.get<Region[]>(this.apiUrl).pipe(
      map((res: any) => {
        try {
          const regions = res[1].filter(
            regionJson => regionJson.id !== ''
          );
          return regions;
        } catch (e) {
          throw e;
        }
      })
    ).subscribe((regions: Region[]) => {
      this.regions$.next(regions);
    }, (err) => {
      this.regions$.error(err);
    });
    return this.regions$;
  }

  public getRegion(code: string): Observable<Region> {
    const regions = this.regions$.getValue();
    const region$: BehaviorSubject<Region> = new BehaviorSubject(null);
    this.getRegions().subscribe((regions: Region[]) => {
      try {
        region$.next(regions.find((region: Region) => region.code === code));
      } catch(e) {
        region$.next(null);
      }
    });
    return region$;
  }

  public getCountriesByRegion(code: string): Observable<Country[]> {
      this.httpClient.get(`http://api.worldbank.org/v2/region/${code}/country?per_page=1000&format=json`).pipe(
        map((res: any) => {
          try {
            return res[1];
          } catch(e) {
            throw(e)
          }
        })
      ).subscribe((data: Country[]) => {
        this.countries$.next(data);
      }, (err) => {
        this.countries$.error(err);
      });
      return this.countries$.asObservable();
  }
}
