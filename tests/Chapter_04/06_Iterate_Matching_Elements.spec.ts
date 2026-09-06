import {test, expect} from '@playwright/test';


test('Iterations', async({page}) => {
    await page.goto('https://github.com/BakkappaN');

    // For - of loop
    const repLinks = await page.$$('.repo');
    for(const repLink of repLinks){
        const name = await repLink.textContent();
        console.log(`${name} \n`);
    }
    
    console.log('===========================');
    
    // For loop
    for(let i = 0; i < repLinks.length; i++){
        const name = await repLinks[i].textContent();
        console.log(`${name} \n`);
    }
    
    console.log('===========================');
    
    // count() + nth() loop
    const repLinksTemp = await page.locator('.repo');
    const count = await repLinksTemp.count();
    for(let i = 0; i < count; i++){
        const name = await repLinksTemp.nth(i).textContent();
        console.log(`${name} \n`);
    }
});