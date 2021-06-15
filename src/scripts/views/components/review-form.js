class ReviewForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <form>
        <div class="field">
          <input type="text" class="input" name="name" placeholder="Entry your name" required>
        </div>
        <div class="field">
          <textarea class="input" name="review" rows="3" placeholder="Entry your review" required></textarea>
        </div>
        <div class="field">
          <button type="submit" id="btn-send" class="btn btn-gold" name="btn-send">Send</review>
        </div>
      </form>
    `;
  }
}

customElements.define('review-form', ReviewForm);
