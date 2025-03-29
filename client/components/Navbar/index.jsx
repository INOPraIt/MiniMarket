import React from 'react'; // Подключение react
import './style.scss'; // Подключение scss - модуль CSS
import { Link } from 'react-router-dom'; // Подключение react-router-dom - библиотека для перехода по страницам
import { connect } from 'react-redux';
import { loginUser, changeUserFieldAction } from '../../store/actions/user.actions';
import { toast } from 'react-toastify';

export default connect((s) => ({
  isLogined: s.user.logined,
  productCart: s.cart.cart
}), {
  loginUser,
  changeUserFieldAction
})(
  ({
    id,
    loginUser,
    isLogined,
    productCart,
    changeUserFieldAction
  }) => {// стрелочная функция для React
    const [menuOpen, setMenuOpen] = React.useState(false); // Функции состояния в React, для того чтобы создовать какие-либо значения
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [cartCount, setCartCount] = React.useState(2);

    console.log('cart in nav', productCart.length);

      const notifyDrag = () => toast.error('Для того чтобы смотреть корзину - авторизируйтесь', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      console.log(isLogined);

    return (
      //Это JSX разметка - это HTML только он так называется потому что пишется внутри функции
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">КАРАЛ</div>
          <div className={menuOpen ? "nav-links open" : "nav-links"}>
            <div>
              <Link style={{ marginTop: '20px' }} to="/">
                Главная
              </Link>
            </div>
            <div>
              <Link to="/aboutCompany">
                О компании
              </Link>
            </div>
            <div>
              <Link to="/partners">
                Партнерам
              </Link>
            </div>
            <div className="cart">
              <Link
                to={"/cart"}>Корзина</Link>
              <span className="cart-count">{productCart.length}</span>
            </div>
            <div>
              <Link
                style={{ textDecoration: 'none' }}
                to={'/catalog'}
              >
                <button className="login-btn">
                  Каталог
                </button>
              </Link>
            </div>
            <div>
              <Link style={{ textDecoration: "none" }} to={'/login'}>
                <button className="login-btn" onClick={() => setIsLoggedIn(!isLoggedIn)}>
                  Войти
                </button>
              </Link>

            </div>
          </div>
          <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </nav>
    )
  })
