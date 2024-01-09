import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import ErrorBoundary from "../error-boundary";
import Login from "../components/login";
import Loader from "../components/loader";
import {Suspense, lazy } from "react";
import NoRecFound from "../components/no-data-found";
import PrivateRoute from './private-route';

const GamesList = lazy(() => import('../components/game-list'));
const PlayGame = lazy(() => import('../components/play'));

const Router = () => (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route index element={<Login />} />
            <Route path='game-list' element={<PrivateRoute />}>
              <Route index element={<GamesList />} />
              <Route path=':code' element={<PlayGame />} />
            </Route>
            <Route path='*' element={<NoRecFound infoText={""} />} /> 
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
  
  export default Router;