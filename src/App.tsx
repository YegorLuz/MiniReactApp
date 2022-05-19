import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const Layout = React.lazy(() => import('./pages/Layout'));
const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const About = React.lazy(() => import('./pages/About'));
const UserList = React.lazy(() => import('./pages/UserList'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <React.Suspense fallback={<>Loading...</>}>
                <Home />
              </React.Suspense>
            } />
            <Route path="about" element={
              <React.Suspense fallback={<>Loading...</>}>
                <About />
              </React.Suspense>
            } />
            <Route path="users" element={
              <React.Suspense fallback={<>Loading...</>}>
                <UserList />
              </React.Suspense>
            } />
            <Route path="login" element={
              <React.Suspense fallback={<>Loading...</>}>
                <Login />
              </React.Suspense>
            } />
            <Route path="*" element={
              <React.Suspense fallback={<>Loading...</>}>
                <NotFound />
              </React.Suspense>
            } />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
