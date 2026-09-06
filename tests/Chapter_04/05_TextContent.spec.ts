import {test, expect} from '@playwright/test';

test('Text Content', async({page}) => {
    
    await page.goto('https://github.com/BakkappaN');
    
    // Returns the text content in the field
    // const name = await page.locator('[itemprop="name"]').textContent();
    const name = await page.locator('[itemprop="name"]').innerText();
    const finalName = name.trim();
    console.log(`The name in the locator is : ${finalName}`);
    expect(finalName).toBe('Testers Talk');
    
    const attributeName = await page.locator('[data-tab-item="repositories"]').first().getAttribute('class');
    console.log(`The attribute of the locator is : ${attributeName}`);

});