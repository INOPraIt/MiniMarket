import React from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import './style.scss';

import arrow from '../../assets/images/icons/arrow.png';
import example from '../../assets/images/categoris/1.png';



export default () => {

  const [section, setSection] = React.useState(true);

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
    <div className='catalogContainer'>
      <div className='filtersContainer'>
        <p className='headerFilters'>
          Фильтры
        </p>
        <div className='sectionFilter'>
          <div
            onClick={() => setSection(prev => !prev)}
            className='closedSection'
          >
            <p className='headerClosedSection'>
              Цвет
            </p>
            <img
              style={section ? { rotate: "-90deg", transition: '0.2s' } : { transition: '0.2s' }}
              className='imgArrow'
              src={arrow}
            />
          </div>
          {section &&
            <div className='openSection'>
              <input type='checkbox' />
              <p className='textCheckBox'>Text</p>
            </div>
          }
        </div>
        <div className='sectionFilter'>
          <div
            onClick={() => setSection(prev => !prev)}
            className='closedSection'
          >
            <p className='headerClosedSection'>
              Материал
            </p>
            <img
              style={section ? { rotate: "-90deg", transition: '0.2s' } : { transition: '0.2s' }}
              className='imgArrow'
              src={arrow}
            />
          </div>
          {section &&
            <div className='openSection'>
              <input type='checkbox' />
              <p className='textCheckBox'>Text</p>
            </div>
          }
        </div>
      </div>
      <div className='verticalLine'></div>
      <div className='catalogProductsContainer'>
        <p className='headerCatalogProducts'>
          Каталог товаров
        </p>
        <div className='blockCards'>
          <div className='blockProductsInCatalog'>
            <div className='productMiniCard'>
              <Link
                style={{ textDecoration: "none" }}
                to={'/producCardPage'}>
                <div className='imgProductMiniCard'>
                  <img
                    className='imgProductMiniCard'
                    src={example}
                  />
                </div>
              </Link>
              <div className='infoProductMiniCard'>
                <p className='miniTextInfo'>
                  Информация от товаре
                </p>
                <p className='namedProductText'>
                  Кран красивый
                </p>
                <p className='priceText'>
                  Цена:
                </p>
                <p className='numberPriceText'>
                  3 200 ₽
                </p>
                <button
                  onClick={notify}
                  className='addToCartBtn'>
                  В корзину
                </button>
              </div>
            </div>
          </div>
          <div className='blockProductsInCatalog'>
            <div className='productMiniCard'>
              <Link
                style={{ textDecoration: "none" }}
                to={'/producCardPage'}>
                <div className='imgProductMiniCard'>
                  <img
                    className='imgProductMiniCard'
                    src={example}
                  />
                </div>
              </Link>
              <div className='infoProductMiniCard'>
                <p className='miniTextInfo'>
                  Информация от товаре
                </p>
                <p className='namedProductText'>
                  Кран красивый
                </p>
                <p className='priceText'>
                  Цена:
                </p>
                <p className='numberPriceText'>
                  3 200 ₽
                </p>
                <button
                  onClick={notify}
                  className='addToCartBtn'>
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
