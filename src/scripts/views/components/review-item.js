class ReviewItem extends HTMLElement {
  set review(review) {
    this.reviewItem = review;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="review">
        <div class="review-person">${this.reviewItem.name} <span class="review-date">${this.reviewItem.date}</span></div>
        <p class="review-text">${this.reviewItem.review}</p>
      </div>
    `;
  }
}

customElements.define('review-item', ReviewItem);
