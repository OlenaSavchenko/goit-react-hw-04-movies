import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';
import routes from './routes';

const HomePageViews = lazy(() =>
  import('./views/HomePageViews' /* webpackChunkName: "home-view" */),
);
const MovieDetailsPageView = lazy(() =>
  import('./views/MovieDetailsPageView' /* webpackChunkName: "movie-view" */),
);
const MoviesPageViews = lazy(() =>
  import('./views/MoviesPageViews' /* webpackChunkName: "movies-view" */),
);

const App = () => (
  <Container>
    <AppBar />
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomePageViews} />
        <Route path={routes.movie} component={MovieDetailsPageView} />
        <Route exact path={routes.movies} component={MoviesPageViews} />
        <Route component={HomePageViews} />
      </Switch>
    </Suspense>
  </Container>
);

export default App;
