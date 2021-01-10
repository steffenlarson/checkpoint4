export default class Quote {
  constructor(data) {
    this.quoteId = data.quote.id
    this.author = data.author
    this.body = data.body
  }

  get Template() {
    return `
                <div class="card">
                  <div class="card-body">

                    <h5 class="hoverable text-center">${this.body}</h5>
                    <p class="hide text-center">${this.author}</p>

                  </div>
                </div>
    `
  }
}