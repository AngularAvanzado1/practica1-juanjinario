import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from './shared/material.module'

describe('GIVEN: an AppComponent declared in AppModule', () => {
  describe('WHEN: the AppModule is compiled', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, MaterialModule],
        declarations: [AppComponent]
      }).compileComponents();
    }));
    it('THEN: should create the component', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });
    it(`THEN: should render 'Regiones del Mundo' in a mat-toolbar tag`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('mat-toolbar').textContent).toContain('Regiones del Mundo');
      });
  });
});
