const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const noFavorite = 'You don\'t have any favorite restaurant';

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see(noFavorite, 'span');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(noFavorite, 'span');

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
  I.see(noFavorite, 'span');

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

  // click this restaurant in favorite page
  I.click(likedRestaurantTitle);

  // unlike this restaurant
  I.seeElement('.btn-like');
  I.click('.btn-like');

  // check the favorite page
  I.amOnPage('/#/favorite');
  I.seeElement('.favorite span');
});

Scenario('add customer review', async ({ I }) => {
  I.see(noFavorite, 'span');

  I.amOnPage('/');

  I.seeElement('.card-body a');
  const firstRestaurant = locate('.card-body a').first();
  I.click(firstRestaurant);

  I.seeElement('review-form');

  const textReview = 'Review from e2e testing';
  I.fillField('name', 'Andrew');
  I.fillField('review', textReview);
  I.click('#btn-send');

  const lastReview = locate('.review-text').last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  assert.strictEqual(textReview, lastReviewText);  
});
