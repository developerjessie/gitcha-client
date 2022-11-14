/* eslint-disable new-cap */
import Home from "../pages/Home";

export default class Router {
  #routes = [
    {
      path: "/",
      view: Home,
    },
  ];

  constructor() {
    this.currentRoute = null;
  }

  pathToRegex(path) {
    return new RegExp(
      "^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$",
    );
  }

  getParams(match) {
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
      (result) => result[1],
    );
    const values = match.result.slice(1);

    return Object.fromEntries(
      keys.map((key, index) => {
        return [key, values[index]];
      }),
    );
  }

  navigateTo(href) {
    history.pushState(null, null, href);
    this.router();
  }

  router() {
    const potentialMatches = this.#routes.map((route) => {
      return {
        route: route,
        result: location.pathname.match(this.pathToRegex(route.path)),
      };
    });

    const match = potentialMatches.find((potentialMatch) => {
      return potentialMatch.result !== null;
    });

    this.currentRoute = match.route.path;

    const view = new match.route.view(this.getParams(match));
    const root = document.querySelector("#root");

    root.innerHTML - "";
    root.insertAdjacentHTML("afterbegin", view.getHtml());
  }

  init() {
    document.body.addEventListener("click", (event) => {
      if (event.target.matches("[data-link]")) {
        event.preventDefault();
        this.navigateTo(event.target.href);
      }
    });

    window.addEventListener("popstate", () => {
      this.router();
    });

    this.router();
  }
}
