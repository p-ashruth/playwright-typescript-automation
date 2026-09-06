import {test, expect} from  '@playwright/test';

test('IFrame Test', async({page}) => {
    await page.goto("https://jqueryui.com/droppable/");

    const iframe = page.frameLocator('[class="demo-frame"]');

    // await page.locator("xpath = //*[id='draggable']");
    const dragElement = iframe.locator('[id="draggable"]');
    const dropElement = iframe.locator('[id="droppable"]');

    await dragElement.dragTo(dropElement);
});