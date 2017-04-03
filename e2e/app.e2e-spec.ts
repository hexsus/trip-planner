import { TravelPlannerPage } from './app.po';

describe('travel-planner App', () => {
  let page: TravelPlannerPage;

  beforeEach(() => {
    page = new TravelPlannerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
