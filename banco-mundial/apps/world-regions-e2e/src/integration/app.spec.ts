import { getRegions } from '../support/app.po';

describe('GIVEN: the world-regions web app', () => {
  beforeEach(() => cy.visit('/'));
  context('WHEN: user visits home page', () => {
  it('THEN: should display regions', () => {
    getRegions().contains('bm-ui-region-card', 'Conoce mas');
  });
  });
});

