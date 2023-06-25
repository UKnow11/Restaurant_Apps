/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('section');
  I.waitForElement('.restaurant-item__not__found', 30);
  I.see('Favorite kosong', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.waitForElement('.restaurant-item__not__found', 30);
  I.see('Favorite kosong', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.waitForElement('.description a', 30);
  I.seeElement('.description a');
  const firstRestaurant = locate('.description a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.waitForElement('#likeButton', 30);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item', 30);
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.description a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
