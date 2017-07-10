import { DIAppPage } from './app.po';

describe('di-app App', () => {
  let page: DIAppPage;

  beforeEach(() => {
    page = new DIAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
