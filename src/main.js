import * as riot from 'riot'
import router from './router/index.js';
import Route from './router/Route.js';
import Message from './components/message/Message.riot';

const homeView = props => `
  <div>
    <h2>Welcome to the home page<h2>
  </div>
`;

const aboutView = props => `
  <div>
    <p>This is the about page</p>
  </div>
`;

const contactView = props => `
  <div>
    <p>This is the contact page</p>
  </div>
`;

const profileView = props => `
  <div>
    <p>This is the profile page<br />
    Hello ${props.name}</p>
  </div>
`;

const routes = [
  new Route('home', '/', homeView),
  new Route('contact', '/contact', riot.component(Message)),
  new Route('about', '/about', aboutView),
  new Route('profile', '/profile/:name', profileView )
];

router(routes);

// import Todo from './todo/Todo.riot'

// const mountApp = riot.component(Todo)

// mountApp(
//   document.getElementById('root'),
//   { 
//     title: 'Hello World',
//     items: []
//   }
// )
