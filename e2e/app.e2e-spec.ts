import { PrintCenterPage } from './app.po';

describe('print-center App', () => {
  let page: PrintCenterPage;

  beforeEach(() => {
    page = new PrintCenterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
