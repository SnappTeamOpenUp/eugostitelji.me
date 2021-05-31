import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import React, { createContext, useContext, useEffect, useState } from "react";

import { UserPool } from "../config/cognito";

export const AccountContext = createContext({});

export const Account = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    getSession()
      .then(() => setLoggedIn(true))
      .catch(() => setLoggedIn(false));
  }, []);

  const getSession = async () =>
    await new Promise((resolve, reject) => {
      const user = UserPool.getCurrentUser();
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject();
          } else {
            resolve(session);
          }
        });
      } else {
        reject();
      }
    });

  const authenticate = async (Username, Password) =>
    await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username,
        Pool: UserPool,
      });

      const authDetails = new AuthenticationDetails({
        Username,
        Password,
      });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          resolve(data);
          setLoggedIn(true);
        },
        onFailure: (err) => {
          reject(err);
        },
        newPasswordRequired: (data) => {
          resolve(data);
        },
      });
    });

  const logout = () => {
    const user = UserPool.getCurrentUser();
    if (user) {
      user.signOut();
      setLoggedIn(false);
    }
  };

  return (
    <AccountContext.Provider
      value={{ authenticate, getSession, logout, loggedIn }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => useContext(AccountContext);
