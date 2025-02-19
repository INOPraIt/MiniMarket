import { Routes, Route } from 'react-router';
import { connect } from 'react-redux';
import React from 'react';

import RestrictAccess from '../RestrictAccess';
import HomePage from '../../pages/Home';

import { getUserInfoAction, clearUserError } from './../../store/actions/user.actions';
import Navbar from '../Navbar';
import Catalog from '../../pages/Catalog';
import ProductCardPage from '../../pages/ProductCardPage';
import Cart from '../../pages/Cart';
import About from '../../pages/About';
import Partner from '../../pages/Partner';
import Login from '../../pages/Login';
import Register from '../../pages/Register';

export default connect(
  (s) => ({
    language: s.user.language,
    user: s.user.state,
    userError: s.user.error,
  }),
  {
    getUserInfoAction,
    clearUserError,
  }
)(({ language, user, userError, getUserInfoAction, clearUserError }) => {
  React.useEffect(() => {
    getUserInfoAction();
  }, []);

  React.useEffect(() => {
    if (userError) {
      // TODO: show error

      clearUserError();
    }
  }, [userError]);

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "60px" }}>
        <Routes>
          <Route path={'/'} element={<HomePage />}/>
          <Route path={'/catalog'} element={<Catalog />}/>
          <Route path={'/producCardPage/:id'} element={<ProductCardPage />}/>
          <Route path={'/cart'} element={<Cart />}/>
          <Route path={'/aboutCompany'} element={<About />}/>
          <Route path={'/partners'} element={<Partner />}/>
          <Route path={'/login'} element={<Login />}/>
          <Route path={'/register'} element={<Register />}/>
        </Routes>
      </div>
    </>
  );
});
