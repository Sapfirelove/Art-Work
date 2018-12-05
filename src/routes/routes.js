import React from 'react';
import { Route } from 'react-router-dom';

import About from '../components/about';
import Gallery from '../components/gallery';
import Shop from '../components/shop';

const Routes = () => {
  return (
    <div>
    <Route exact path="/" component={About} />
    <Route exact path="/gallery" component={Gallery} />
    <Route exact path="/shop" component={Shop} />
    </div>
  );
}

export default Routes;
