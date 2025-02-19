import React from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './style.scss';

import arrow from '../../assets/images/icons/arrow.png';
import example from '../../assets/images/categoris/1.png';
import { getAllProducts } from '../../store/actions/product.action';
import { addProductToCart } from '../../store/actions/cart.action';

export default connect(
  (s) => ({
    id: s.user.userId,
    productData: s.product.state
  }),
  {
    getAllProducts,
    addProductToCart
  }
)(({ productData, getAllProducts, addProductToCart }) => {

  const [section, setSection] = React.useState(true);

  React.useEffect(() => {
    getAllProducts();
  }, []);

  console.log('Product data:', productData);

  const handleAddToCart = (product) => {
    addProductToCart({ product }); // Добавляем товар в корзину
    toast.success('Добавлено в корзину', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

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
          {productData.map((e, i) => (
            <div className='blockProductsInCatalog'>
              <div className='productMiniCard'>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/producCardPage/${e._id}`}
                  >
                  <div className='imgProductMiniCard'>
                    <img
                      className='imgProductMiniCard'
                      src={e.image.replace("./", "http://127.0.0.1:3000/")}
                    />
                  </div>
                </Link>
                <div className='infoProductMiniCard'>
                  <p className='miniTextInfo'>
                    Описание товара
                  </p>
                  <p className='namedProductText'>
                    {e.named}
                  </p>
                  <p className='priceText'>
                    Цена:
                  </p>
                  <p className='numberPriceText'>
                    {e.price} ₽
                  </p>
                  <button
                    onClick={() => handleAddToCart(e)}
                    className='addToCartBtn'>
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})
