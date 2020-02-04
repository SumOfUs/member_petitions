import React, { useState, useEffect } from 'react';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';

import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { ICredentials } from '@aws-amplify/core';

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";


Amplify.configure(config);

function checkUser() {
  Auth.currentAuthenticatedUser()
    .then(user => {
      console.log({ user })

    })
    .catch(err => console.log(err))
}

function signOut() {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err))
}



const Petitions = () => {
  return (
    <h1>Petitions</h1>
  )
}

const Home = () => {
  return (
    <h1>Home</h1>
  )
}

const AuthenticatedRoute = withRouter((props:any) => {
  if (!props.isAuthenticated) return <Redirect to="/login" />

  return <div>
    {props.children}
  </div>
});

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState();

  const signIn = async () => {
    const user = await Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Facebook });
    if (user) {
      setIsAuthenticated(user);
    }
  }

  useEffect(() => {
    const checkUser = async () => {
      const user = await Auth.currentAuthenticatedUser();
      if(user) setIsAuthenticated(user);
    }
    checkUser();
  }, [isAuthenticated]);

  return (
    <>
        <button onClick={checkUser}>Check User</button>
        <button onClick={signOut}>Sign Out</button>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/petitions">Petitions</Link>
              </li>
              <li>
                <Link to="/login"></Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <Login signIn={signIn}/>
            </Route>
            <AuthenticatedRoute isAuthenticated={isAuthenticated} path="/petitions">
              <Petitions />
            </AuthenticatedRoute>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}


const Login = (props: { signIn: any}) => {
  return (
    <div className="Login">
        <button onClick={props.signIn}>Sign In with Facebook</button>
    </div>
  );
}

const myFederatedConfig = {
  facebook_app_id: '1234'
};

export default withAuthenticator(App, true);
