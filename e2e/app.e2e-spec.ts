import { AngularTrainingProductManagementPage } from './app.po';

describe('angular-training-product-management App', () => {
  let page: AngularTrainingProductManagementPage;

  beforeEach(() => {
    page = new AngularTrainingProductManagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
