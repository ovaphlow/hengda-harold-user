import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';

import SignIn from './SignIn';

function Index() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/sign-in">
          <SignIn />
        </Route>
      </Switch>
    </HashRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
