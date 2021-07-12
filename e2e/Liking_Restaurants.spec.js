const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const noFavorite = 'You don\'t have any favorite restaurant';

Scenario('showing empty liked restaurants', ({ I }) => {
  // 1. Buka halaman favorite
  // 2. Pastikan belum ada restaurant yang disukai
  I.see(noFavorite, 'span');
});

Scenario('liking one restaurant', async ({ I }) => {
  // 1. Buka halaman favorite
  // 2. Pastikan belum ada restaurant yang disukai
  I.see(noFavorite, 'span');

  // 3. Buka halaman home
  I.amOnPage('/');

  // 4. Pilih restaurant pertama dan ke halaman detail
  I.seeElement('.card-body a');
  const firstRestaurant = locate('.card-body a').first();
  // Menangkap nama restaurant pertama
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  // 5. Klik tombol like di halaman  detail
  I.seeElement('.btn-like');
  I.click('.btn-like');

  // 6. Buka halaman favorite
  I.amOnPage('/#/favorite');
  // 7. Melihat list restaurant favorite dan menangkap nama restaurant tersebut
  I.seeElement('resto-list');  
  const likedRestaurantTitle = await I.grabTextFrom('.card-title');

  // 8. Membandingkan restaurant yang di favorite dengan restaurant yang diklik
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  // 1. Buka halaman favorite
  // 2. Pastikan belum ada restaurant yang disukai
  I.see(noFavorite, 'span');

  // 3. Buka halaman home
  I.amOnPage('/');

  // 4. Pilih restaurant pertama dan ke halaman detail
  I.seeElement('.card-body a');
  const firstRestaurant = locate('.card-body a').first();
  // Menangkap nama restaurant pertama
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  // 5. Klik tombol like restaurant
  I.seeElement('.btn-like');
  I.click('.btn-like');

  // 6. Buka halaman favorite
  I.amOnPage('/#/favorite');
  // 7. Melihat list restaurant favorite dan menangkap nama restaurant tersebut
  I.seeElement('resto-list');
  const likedRestaurantTitle = await I.grabTextFrom('.card-title');

  // 8. Membandingkan restaurant yang di favorite dengan restaurant yang diklik
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // 9. Klik nama restaurant pada halaman favorite
  I.click(likedRestaurantTitle);

  // 10. klik tombol unlike restaurant
  I.seeElement('.btn-like');
  I.click('.btn-like');

  // Buka halaman favorite dan lihat ada pesan tidak ada list di favorite
  I.amOnPage('/#/favorite');
  I.seeElement('.favorite span');
});

Scenario('add customer review', async ({ I }) => {
  // 1. Buka halaman favorite
  // 2. Pastikan belum ada restaurant yang disukai
  I.see(noFavorite, 'span');

  // 3. Buka halaman home
  I.amOnPage('/');

  // 4. Pilih restaurant pertama dan ke halaman detail
  I.seeElement('.card-body a');
  const firstRestaurant = locate('.card-body a').first();
  I.click(firstRestaurant);

  // 5. Melihat form review
  I.seeElement('review-form');

  // 6. Mengisi field nama, field review, dan klik tombol send untuk menambah review
  const textReview = 'Review from e2e testing';
  I.fillField('name', 'Andrew');
  I.fillField('review', textReview);
  I.click('#btn-send');

  // 7. Melihat review yang telah dikirim dan bandingkan dengan review yang telah ditulis
  const lastReview = locate('.review-text').last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  assert.strictEqual(textReview, lastReviewText);  
});
