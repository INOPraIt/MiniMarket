import React from 'react'; // Подключение react
import './style.scss'; // Подключение scss - модуль CSS
import { Link } from 'react-router-dom'; // Подключение react-router-dom - библиотека для перехода по страницам

export default () => { // стрелочная функция для React
  const [menuOpen, setMenuOpen] = React.useState(false); // Функции состояния в React, для того чтобы создовать какие-либо значения
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [cartCount, setCartCount] = React.useState(2);

  return (
    //Это JSX разметка - это HTML только он так называется потому что пишется внутри функции
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">КАРАЛ</div>
        <div className={menuOpen ? "nav-links open" : "nav-links"}>
          <div>
            <Link style={{marginTop: '20px'}} to="/">
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
            <Link to={"/cart"}>Корзина</Link>
            <span className="cart-count">{cartCount}</span>
          </div>
          <div>
            <Link 
              style={{textDecoration: 'none'}}
              to={'/catalog'}
              >
            <button className="login-btn">
              Каталог
            </button>
            </Link>
            
          </div>
          <div>
            <button className="login-btn" onClick={() => setIsLoggedIn(!isLoggedIn)}>
              {isLoggedIn ? "Профиль" : "Войти"}
            </button>
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
}
