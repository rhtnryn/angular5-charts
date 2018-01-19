import { DisplayDashboardPage } from './app.po';

describe('display-dashboard App', () => {
  let page: DisplayDashboardPage;

  beforeEach(() => {
    page = new DisplayDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
