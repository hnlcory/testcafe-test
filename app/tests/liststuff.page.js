import { Selector } from 'testcafe';

class ListStuffPage {
  constructor() {
    this.pageId = '#list-stuff-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    await testController.wait(60000).expect(this.pageSelector.exists).ok();
  }

  async hasTable(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    const rowCount = Selector('tr').count; // tr = <tr>  .tr = class='tr' #tr = id='hr'
    await testController.wait(60000).expect(rowCount).gte(2);
  }
}

export const listStuffPage = new ListStuffPage();
