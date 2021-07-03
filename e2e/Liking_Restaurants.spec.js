const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.favorite');
  I.see('You don\'t have any favorite restaurant', 'span');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('You don\'t have any favorite restaurant', 'span');

  I.amOnPage('/');

  I.seeElement('.card-body a');
  const firstRestaurant = locate('.card-body a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  
  I.seeElement('.btn-like');
  I.click('.btn-like');

  I.amOnPage('/#/favorite');
  I.seeElement('resto-list');
  const likedRestaurantTitle = await I.grabTextFrom('.card-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('You don\'t have any favorite restaurant', 'span');

  I.amOnPage('/');

  I.seeElement('.card-body a');
  const firstRestaurant = locate('.card-body a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  
  I.seeElement('.btn-like');
  I.click('.btn-like');
  
  I.amOnPage('/#/favorite');
  I.seeElement('resto-list');
  const likedRestaurantTitle = await I.grabTextFrom('.card-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  


});