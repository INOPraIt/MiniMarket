import React, {useState} from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { registerUser, changeUserFieldAction } from '../../store/actions/user.actions';
import { useNavigate } from 'react-router-dom';

export default connect((s) => ({
  user: s.user,
  isRegistred: s.user.registred
}), {
  registerUser,
  changeUserFieldAction
})(
  ({
    registerUser,
    isRegistred,
    changeUserFieldAction
  }) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [email, setEmail] = useState('');

    let navigate = useNavigate();

    function createUser() {
      registerUser({
        username: username,
        password: password
      });
      console.log(isRegistred);
    }

    React.useEffect(() => {
      if(isRegistred) {
        navigate('/login');
        console.log('hello');
      }
      if (isRegistred !== null)changeUserFieldAction({name: "registred", value: null}) 
    }, [isRegistred]);

  return (
    <div className='loginContainer'>
    <div className='blockLoginContainer'>
      <p className='headerLogin'>
        Добро пожаловать
      </p>
      <input
        onChange={(e) => { setUserName(e.target.value) }}
        className='inputLogin'
        placeholder='Имя пользователя'
      />
      <input
        className='inputLogin'
        placeholder='Email'
        onChange={(e) => { setEmail(e.target.value) }}
      />
      <input
        className='inputLogin'
        placeholder='Пароль'
        onChange={(e) => { setPassword(e.target.value) }}
        type='password'
      />
      <input 
        className='inputLogin'
        placeholder='Повторите пароль'
        onChange={(e) => { setRePassword(e.target.value) }}
        type='password'
      />
      <button 
        onClick={createUser}
        className='btnLogin'
      >
        Регистрация
      </button>
      <Link 
        to={'/login'}
        className="linkNoAccaunt">
        У Вас есть аккаунт?
      </Link>
    </div>
  </div>
  )
})

