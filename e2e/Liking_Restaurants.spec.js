Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.favorite');
  I.see('You don\'t have any favorite restaurant', 'span');
});

Scenario('liking one restaurant', ({ I }) => {
  I.see('You don\'t have any favorite restaurant', 'span');

  I.amOnPage('/');
  // … kita akan mengisi uji coba berikutnya …
});