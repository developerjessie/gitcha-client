export default class Page {
  constructor(params) {
    this.params = params;
  }

  setTitle() {
    document.title = "GitCha";
  }

  getHtml() {
    return "";
  }
}
