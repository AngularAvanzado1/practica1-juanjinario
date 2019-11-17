import { async, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
 } from '@angular/common/http/testing';
 import { Observable } from 'rxjs';

import { CountriesService } from './countries.service';

describe('GIVEN: a Countries Service', () => {
  describe('WHEN: the Service is compiled', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
    });
    it('THEN: should be created', () => {
      const service: CountriesService = TestBed.get(CountriesService);
      expect(service).toBeTruthy();
    });
    it(`THEN: should return an observable when call 'getCountry()'`, () => {
      const service: CountriesService = TestBed.get(CountriesService);
      const country$: Observable<any> = service.getCountry('ARG');  // Fuerzo un pais
      expect(country$).toBeInstanceOf(Observable);
    });
  });
});
