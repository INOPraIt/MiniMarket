import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, changeUserFieldAction } from '../../store/actions/user.actions';

export default connect((s) => ({
  user: s.user,
  isLogined: s.user.logined,
  id: s.user.userId
}), {
  loginUser,
  changeUserFieldAction
})(
  ({
    id,
    loginUser,
    isLogined,
    changeUserFieldAction
  }) => {
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    function loginedUser() {
      loginUser({
        email: email,
        username: username,
        password: password
      });
      console.log('Is logined', isLogined);
      console.log('Id user', id);
    }

    return (
      <div className='loginContainer'>
        <div className='blockLoginContainer'>
          <p className='headerLogin'>
            Добро пожаловать
          </p>
          <input
            className='inputLogin'
            placeholder='Имя пользователя'
            onChange={(e) => { setUsername(e.target.value) }}
          />
          <input
            className='inputLogin'
            placeholder='Email'

          />
          <input
            className='inputLogin'
            onChange={(e) => { setPassword(e.target.value) }}
            placeholder='Пароль'
            type='password'
          />
          <button 
            onClick={loginedUser}
            className='btnLogin'>
            Войти
          </button>
          <Link
            to={'/register'}
            className="linkNoAccaunt">
            У Вас нет аккаунта?
          </Link>
        </div>
      </div>
    )
  })
