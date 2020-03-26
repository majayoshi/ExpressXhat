import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "./layouts/Admin/Admin.js";
import RTLLayout from "./layouts/RTL/RTL.js";

import "./assets/scss/black-dashboard-react.scss";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";
import { createStore } from "redux";
import Reducers from './reducers'
import { Provider } from "react-redux";

const hist = createBrowserHistory();

// redux
const store = createStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
  <Router history={hist}>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/rtl" render={props => <RTLLayout {...props} />} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>
  </Provider>,
  document.getElementById("root")
);
