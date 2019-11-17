import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Region, Country } from "@b-mundial/domain";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private country$: BehaviorSubject<Country>;

  constructor(private httpClient: HttpClient) {
    this.country$ = new BehaviorSubject(null);
  }

  public getCountry(id: string): Observable<Country> {
      this.httpClient.get(`http://api.worldbank.org/V2/country/${id}?format=json`).pipe(
        map((res: any) => {
          try {
            return res[1][0];
          } catch(e) {
            throw(e);
          }
        })
      ).subscribe((data) => {
        this.country$.next(data);
      }, (err) => {
        this.country$.error(err);
      });
      return this.country$;
  }
}
