import {test, expect} from '@playwright/test';
test('Login test', async ({page}) => {
await page.goto('https://orangehrm.com/en/solutions/talent-management/recruitment');
});