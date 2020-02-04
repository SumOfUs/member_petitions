import React from 'react';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";

Amplify.configure(config);

function checkUser() {
  Auth.currentAuthenticatedUser()
    .then(user => console.log({ user }))
    .catch(err => console.log(err))
}

function signOut() {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err))
}


async function facebook() {
  return await Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Facebook });
}


const App = () => {
  return (
    <div className="App">
        <h1>Hello</h1>
        <button onClick={facebook}>Sign In with Facebook</button>

        <button onClick={checkUser}>Check User</button>
        <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default App;
