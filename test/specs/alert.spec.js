var assert = require('assert');

describe('End to End test', async () => {
    
    it(`User sholud be able to login and order a product`, async () => {
        console.log("test");
        var alertButtonSelector = await $(`~alert-btn-acc-id`);
        await alertButtonSelector.waitForDisplayed({ timeout: 30000 });
        await alertButtonSelector.click();

        var yesButton = await $('android=new UiSelector().resourceId("android:id/button1")');
        await yesButton.waitForDisplayed({ timeout: 30000 });
        await yesButton.click();

        var alertPageText = await $(`~alert-page-text-acc-id`);
        await alertPageText.waitForDisplayed({ timeout: 30000 });
        assert(await alertPageText.isDisplayed());
    });

});
