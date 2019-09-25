export default class Route {
  constructor(name, path, view) {
    this.name = name;
    this.path = path;
    this.view = view;  // method to call with props when route matches
  }

  setProps(newProps) {
    this.props = newProps;    // new props sent view
  }

  renderView() {  // this gets called when the route is matched
    return this.view(this.props);
  }
}