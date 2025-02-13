import React from 'react';
import './style.scss';
import { toast } from 'react-toastify';

import cran from '../../assets/images/categoris/1.png';

export default () => {

  const a = [
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
  ];

  const notify = () => toast.success('Спасибо за заказ. Вам позвонит менеджер', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  
  const notifyDrag = () => toast.error('Товар удален из корзины', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  return (
    <div className='cartContainer'>
      <p className='headerCart'>
        Ваша корзина
      </p>
      <div className='containerCards'>
        {a.map((e, i) => (
          <div>

            <div className='cardInCart'>
              <img
                src={cran}
                className='imgIndex'
              />
              <div className='textsCranCardInToCart'>
                <p className='namedCran'>
                  Смеситель для кухни <br />
                  Delinia Alena 32.1 см цвет хром
                </p>
                <p className='descriptionCard'>
                  Давно выяснено, что при оценке дизайна и композиции читаемый
                  текст мешает сосредоточиться. Lorem Ipsum используют потому,
                  что тот обеспечивает более или менее
                </p>
                <p className='descriptionCard'>
                  3 200 ₽
                </p>
                <div>
                  <button
                    onClick={notifyDrag}
                    className='btnCreateOrder'>
                    Удалить из корзины
                  </button>
                </div>
              </div>
            </div>
            <hr className='line' />
          </div>
        ))}
      </div>
      <hr className='line' />
      <div className='createOrder'>
        <p className='createOrderText'>Ваш заказ</p>
        <p className='priceOrderText'>Сумма 6000 ₽</p>
        <button
          onClick={notify}
          className='btnCreateOrder'>
          Оформить заказ
        </button>
      </div>
    </div>
  )
}
