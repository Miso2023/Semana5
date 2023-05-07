import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";


setDefaultTimeout(60 * 1000 * 2)

Given('User navigates to the application', async function () {
    await pageFixture.page.goto("http://localhost:2368/ghost/#/signin")
    await pageFixture.page.screenshot({path: './pagina.png'})

})
Given('User click on the login link', async function () {
    console.log("a")
    
});
Then('Post is created', async function () {
    console.log("b")
})

Then('User enter the username', async function (username) {
    await pageFixture.page.locator('input[name="username"]').type(username);
    
})
Then('User enter the password', async function (password) {
    await pageFixture.page.locator('input[name="password"]').type(password);
})

