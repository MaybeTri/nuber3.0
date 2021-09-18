import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Driver from './components/driver';
import Rider from './components/rider';
import Choose from './components/choose';


Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">


      <header className="App-header">
        <AmplifySignOut />


        <Router>
          <div>

            <Switch>
              <Route exact path="/">
                <Choose />
              </Route>
              <Route path="/driver">
                <Driver />
              </Route>
              <Route path="/rider">
                <Rider />
              </Route>
            </Switch>

          </div>
        </Router>
      </header>

    </div>
  );
}



export default withAuthenticator(App);
