import { SimpleEnergyPage } from './app.po';

describe('simple-energy App', () => {
  let page: SimpleEnergyPage;

  beforeEach(() => {
    page = new SimpleEnergyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
