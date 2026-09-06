import {test, expect} from '@playwright/test';
import { executionAsyncResource } from 'node:async_hooks';

// Timeouts : The maximum time required to run a test

// a) Test Timeout - Time taken for a test to execute
// b) AssertionTimeout - Expect
// c) Action Timeout - Click, Press, Goto
// d) All Test Execution Timeout - Time taken for all tests in a .spec.ts to execute

test('Timeouts', async({page}) => {
    await page.goto('https://github.com/login');
    
    await page.locator('[id="login_field"]').fill("iamrandom@github.com");
    await page.keyboard.press('Enter');

    await expect(page.locator('[class="SessionsAuthHeader-module__authFormHeaderTitle--HKSM6"]')).toHaveText('Sign in to GitHub');

    test.setTimeout(25000);
});