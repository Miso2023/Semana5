import { BeforeAll, AfterAll } from "@cucumber/cucumber";
import { pageFixture } from "./pageFixture";
import { Browser, Page, chromium } from "@playwright/test";

let browser: Browser;
let page: Page;
BeforeAll(async function(){
    const browser = await chromium.launch({headless:false}); //si quisieramos el chromium headless {headless:true}
    const context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page=page;


});
AfterAll(async function (){
    await pageFixture.page.close();
    await browser.close();
})
