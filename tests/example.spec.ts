const { test, expect } = require('@playwright/test');
const selectors = require('./selectors.ts');
const paths = require('./paths.ts');

test('Feature: Verify Footium.club functionality', async ({ page }) => {
  await verifyGetStartedButton(page);
  await verifyLogosExist(page);
  await verifyCompetitionTable(page);
});

async function verifyGetStartedButton(page) {
  await page.goto(paths.homepage);

  const getStartedLink = await page.$eval(selectors.getStartedButton, el => el.getAttribute('href'));
  expect(getStartedLink).toBe(paths.getStartedArticle);
}

async function verifyLogosExist(page) {
  const backedVC = await page.$(selectors.backedVC);
  const animocaBrands = await page.$(selectors.animocaBrands);
  const strideVC = await page.$(selectors.strideVC);
  const entreeCapital = await page.$(selectors.entreeCapital);
  const conceptVentures = await page.$(selectors.conceptVentures);
  const iVC = await page.$(selectors.iVC);
  const encodeClub = await page.$(selectors.encodeClub);

  const meritCircle = await page.$(selectors.meritCircle);
  const blackPool = await page.$(selectors.blackPool);
  const bayz = await page.$(selectors.bayz);
  const yeldGuild = await page.$(selectors.yeldGuild);

  const angelChris = await page.$(selectors.angelChris);
  const angelMichal = await page.$(selectors.angelMichal);
  const angelAhmed = await page.$(selectors.angelAhmed);
  const angelSol = await page.$(selectors.angelSol);

  const logoSelectors = [backedVC, animocaBrands, strideVC, entreeCapital, conceptVentures, iVC, encodeClub, meritCircle, blackPool, bayz, yeldGuild, angelChris, angelMichal, angelAhmed, angelSol];

  for (const logoSelector of logoSelectors) {
    expect(logoSelector).not.toBeNull();
    expect(await logoSelector.isVisible()).toBe(true);
  }
}

async function verifyCompetitionTable(page) {
  const playButton = await page.$(selectors.playButton);
  await playButton.click();

  await page.waitForSelector(selectors.competitionTable);

  const clubLogos = await page.$$(selectors.clubLogos);
  expect(clubLogos.length).toBe(12);
}
