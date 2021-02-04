import React, {useState, useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ( {component: Component, ...rest}) => {
  return (
      <Route
          {...rest}
          render = {props => 
              localStorage.getItem('loggedInfo')?(
                  <Component {...props} />
              ) : ( 
                  <Redirect to={{
                                  pathname: '/', 
                                  state: {from: props.location}
                                }}
                  />
              )
          }
        />
      )
};

export default PrivateRoute;