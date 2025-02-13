import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom'

import one from '../../assets/images/imagesTiles/blockGeneral.png';
import price from '../../assets/images/icons/price.png';
import home from '../../assets/images/icons/home.png';
import dacha from '../../assets/images/icons/dacha.png';
import apart from '../../assets/images/icons/apart.png';

import cranes from '../../assets/images/categoris/1.png';
import hoses from '../../assets/images/categoris/2.png';
import accessories from '../../assets/images/categoris/3.png';


export default () => {
  return (
    <div className='containerHome'>
      <div className='homeBlockGeneral'>
        <div className='headerGeneralBlock'>
          <p className='headerText'>
            Лучшая сантехника <br />
            для дома, дачи и квартир
          </p>
          <p className='headerTwoText'>
            Лучшая сантехника для вашего дома:<br />
            премиальное качество по разумной цене!
          </p>
          <div className='btns'>
            <Link to="/catalog">
              <button className='catalogBtn'>
                Каталог
              </button>
            </Link>
            <Link to="/aboutCompany">
              <button className='aboutCompanyBtn'>
                О компании
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='blockOnes'>
        <div className='leftBlockOnes'>
          <p className='textOneLeftBlocksOnes'>
            Не знаете где купить <br />
            сантехнику по адекватным ценам?
          </p>
          <p className='textTwoLeftBlocksOnes'>
            Наш магазин предлагает широкий ассортимент
            сантехники и аксесуаров по низким ценам с самым высоким
            качеством.
          </p>
          <a href='#category'>
            <button className='categoryBtn'>
              Категории
            </button>
          </a>

        </div>
        <div className='rightBlockOnes' >
          <div
            className='blockTextsRightBlockOnes'
            style={{
              borderRight: '1px solid rgb(236, 236, 236)',
              borderBottom: "1px solid rgb(236, 236, 236)"
            }}>
            <div className='iconsAndTextRightBlockOnes'>
              <img
                src={home}
                className='imgIconInBlockRight' />
              <div>
                <p className='textIcons'>
                  Для дома
                </p>
                <p className='textDescriptionIcons'>
                  Брольшой выбор для частных домов
                </p>
              </div>
            </div>
          </div>
          <div className='blockTextsRightBlockOnes' style={{ borderBottom: "1px solid rgb(236, 236, 236)" }}>
            <div className='iconsAndTextRightBlockOnes'>
              <img
                src={apart}
                className='imgIconInBlockRight' />
              <div>
                <p className='textIcons'>
                  Для квартир
                </p>
                <p className='textDescriptionIcons'>
                  Так же подойдет для квартир
                </p>
              </div>
            </div>
          </div>
          <div className='blockTextsRightBlockOnes' style={{ borderRight: '1px solid rgb(236, 236, 236)' }}>
            <div className='iconsAndTextRightBlockOnes'>
              <img
                src={dacha}
                className='imgIconInBlockRight' />
              <div>
                <p className='textIcons'>
                  Для дачи
                </p>
                <p className='textDescriptionIcons'>
                  Самое то для дачи
                </p>
              </div>
            </div>
          </div>
          <div className='blockTextsRightBlockOnes'>
            <div className='iconsAndTextRightBlockOnes'>
              <img
                src={price}
                className='imgIconInBlockRight' />
              <div>
                <p className='textIcons'>
                  Лучшие цены
                </p>
                <p className='textDescriptionIcons'>
                  Адекватные цены
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="category"></div>
      <div className='blockTwo'>
        <p className='miniHeaderBlockTwo'>
          Ознакомтесь с нашей продукцией
        </p>
        <p className='headerBlockTwo'>
          Популярные категории
        </p>
        <div className='categoryBlockTwo'>
          <div className='categoriesDiv'>
            <img
              className='imgCategory'
              src={cranes}
            />
            <p
              className='hosesText'
            >
              Смесители
            </p>
          </div>
          <div className='categoriesDiv'>
            <img
              className='imgCategory'
              src={hoses}
            />
            <p
              className='hosesText'
            >
              Шланги
            </p>
          </div>
          <div className='categoriesDiv'>
            <img
              className='imgCategory'
              src={accessories}
            />
            <p
              className='hosesText'
            >
              Комплектующие
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
