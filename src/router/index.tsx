import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from '../components/404';
import Login from '../components/login';
import Loader from '../components/loader';
import PrivateRoute from './private-route';
import ErrorBoundary from '../error-boundary';
const GameList = lazy(() => import('../components/game-list'));
const PlayGame = lazy(() => import('../components/play-game'));

const Router = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Login />} />
          <Route path='game-list' element={<PrivateRoute />}>
            <Route index element={<GameList />} />
            <Route path=':code' element={<PlayGame />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter>
);

export default Router;
