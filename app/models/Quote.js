export default class Quote {
  constructor(data) {
    this.quoteId = data.quote.id
    this.author = data.quote.author
    this.body = data.quote.body

  }

  get Template() {
    return `
                <div class="card">
                  <div class="card-body">

                    <p class="hoverable text-center">${this.body}</p>
                    <h5 class="hide text-center">${this.author}</h5>

                  </div>
                </div>
    `
  }
}