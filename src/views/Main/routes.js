import React from 'react';
import {Route} from 'react-router';
import Container from './Container';

class Fish extends React.Component {
  render() {
    return(
      <div>
        I am a Fish
      </div>
    );
  }
}

export const makeMainRoutes = () => {
  return (
    <div>
      <Route path="/" component={Container} />
      <Route path="/dogs" component={Fish} />
    </div>
  );
}

export default makeMainRoutes;
