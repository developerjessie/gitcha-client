import Page from "./Page";
import { homeMarkup } from "../markups/homeMarkup";

class Home extends Page {
  constructor(params) {
    super(params);
    this.setTitle();
  }

  getHtml() {
    return homeMarkup;
  }
}

export default Home;
