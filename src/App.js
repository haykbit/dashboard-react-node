import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import List from './Pages/List/List';
import SingleElement from './Pages/SingleElement/SingleElement';
import NewElement from './Pages/NewElement/NewElement';

import { DarkModeContext } from './context/darkModeContext';
import { userInputs, productInputs } from './utils/formsource';

import './style/dark.scss';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<SingleElement />} />
              <Route
                path="new-element"
                element={
                  <NewElement inputs={userInputs} title="Add New User" />
                }
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<SingleElement />} />
              <Route
                path="new-element"
                element={
                  <NewElement inputs={productInputs} title="Add New Product" />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
