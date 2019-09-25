import Router from './Router';

export default routes => {
  const router = new Router(routes, document.getElementById('root'));   // passes root element and routes to router

  document.addEventListener('DOMContentLoaded', e => {
    document.querySelectorAll('[route]')
      .forEach(route => route.addEventListener('click', e => {
        e.preventDefault();
        router.navigate(e.target.getAttribute('route'));
      }, false));
  });   // adds click event listener to buttons that calls the router's navigate method with the text of the route attrib

  window.addEventListener('hashchange', e => router.navigate(e.target.location.hash.substr(1)));  // adds hash change event listener to call router's navigate method
}