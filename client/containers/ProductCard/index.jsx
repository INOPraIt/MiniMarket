import React from 'react';
import { toast } from 'react-toastify';
import './style.scss';

import photoProductCard from '../../assets/images/categoris/1.png';

export default () => {
    const notify = () => toast.success('Добавлено в корзину', {
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
    <div className='productCardContainer'>
      <div className='leftBlockProductCard'>
        <div className='photoProductCard'>
          <div className='imgPhotoProductCard'>
            <img
              src={photoProductCard}
              className='imgProductCard'
            />
          </div>
        </div>
        <div className='headerProductCard'>
          <div className='divSaleProcent'>
            Выгодная цена
          </div>
          <p className='headerNamedProduct'>
            Смеситель для кухни <br />
            Delinia Alena 32.1 см цвет хром
          </p>
          <p className='priceNumberProductCard'>
            3 200 ₽
          </p>
          <p className='descriptionTextProductCard'>
            Описание
          </p>
          <p className='descriptionProductCard'>
            Давно выяснено, что при оценке дизайна и композиции читаемый
            текст мешает сосредоточиться. Lorem Ipsum используют потому,
            что тот обеспечивает более или менее
          </p>
        </div>
      </div>
      <div className='rightBlockProductCard'>
        <div className='orderDetalisBlockProductCard'>
          <p className='headerDetailsProduct'>
            Детали товара
          </p>
          <div className='textAndText'>
            <p className='namedText'>
              Страна изготовитель: 
            </p>
            <p className='named'>
              Росиия
            </p>
          </div>
          <div className='textAndText'>
            <p className='namedText'>
              Материалы: 
            </p>
            <p className='named'>
              Сталь, железо
            </p>
          </div>
          <div className='textAndText'>
            <p className='namedText'>
              Количество на складе: 
            </p>
            <p className='named'>
              1200 штук
            </p>
          </div>
          <div className='blockBtn'>
            <button
              onClick={notify}
              className='addToCartProductCard'>
              Добавить товар в корзину
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}
