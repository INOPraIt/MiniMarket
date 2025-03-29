import React from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './style.scss';

import arrow from '../../assets/images/icons/arrow.png';
import example from '../../assets/images/categoris/1.png';
import { getAllProducts, getProductFilterColorAndMaterial } from '../../store/actions/product.action';
import { addProductToCart } from '../../store/actions/cart.action';

export default connect(
  (s) => ({
    id: s.user.userId,
    productData: s.product.state,
    productDataFilters: s.product.dataProductFilter
  }),
  {
    getAllProducts,
    addProductToCart,
    getProductFilterColorAndMaterial
  }
)(({
  productData,
  getAllProducts,
  addProductToCart,
  getProductFilterColorAndMaterial,
  productDataFilters
}) => {

  React.useEffect(() => {
    getAllProducts();
  }, []);

  const handleAddToCart = (product) => {
    addProductToCart({ product });
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

  const [section, setSection] = React.useState(true);
  const [sectionMat, setSectionMat] = React.useState(true);

  const [selected, setSelected] = React.useState(null);
  const [selectedColor, setSelectedColor] = React.useState(null);

  const handleChangeColor = (color) => {
    setSelectedColor(color);
    console.log('Выбранный цвет:', color);
  };

  const handleChange = (material) => {
    setSelected(material);
    console.log('Выбранный материал:', material);
  };

  function filterBtn() {
    getProductFilterColorAndMaterial({
      color: selectedColor,
      material: selected
    })
  }

  const materialFilter = [
    { material: 'Латунь' },
    { material: 'Нержавеющая сталь' },
    { material: 'Цинк, хромированная сталь' },
    { material: 'Керамика; abs-пластик' },
    { material: 'Нейлон, щетина, сталь' },
    { material: 'Пластик, металл' },
    { material: 'Металл' },
    { material: 'Пластик' },
    { material: 'Металл; сталь; полимерно-порошковое покрытие.' },
  ]

  const colorFilter = [
    { color: 'Графит' },
    { color: 'Сатин' },
    { color: 'Черный' },
    { color: 'Хром' },
    { color: 'Металл' },
    { color: 'Серый, серебристый' },
    { color: 'Серебристый' },
    { color: 'Золото' },
    { color: 'Белый' },
    { color: 'Белый, сталь' },
    { color: 'Серебро; серебристый; хром' },
  ]

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
            <>
              {colorFilter.map((e, i) => (
                <div className='openSection'>
                  <input
                    type='radio'
                    name='color'
                    id={`color-${i}`}
                    onChange={() => handleChangeColor(e.color)}
                  />
                  <label htmlFor={`color-${i}`} className='textCheckBox'>{e.color}</label>
                </div>
              ))}
            </>
          }
        </div>
        <div className='sectionFilter'>
          <div
            onClick={() => setSectionMat(prev => !prev)}
            className='closedSection'
          >
            <p className='headerClosedSection'>
              Материал
            </p>
            <img
              style={sectionMat ? { rotate: "-90deg", transition: '0.2s' } : { transition: '0.2s' }}
              className='imgArrow'
              src={arrow}
            />
          </div>
          {sectionMat &&
            <>
              {materialFilter.map((e, i) => (
                <div className='openSection' key={i}>
                  <input
                    type='radio'
                    name='material'
                    id={`material-${i}`}
                    onChange={() => handleChange(e.material)}
                  />
                  <label htmlFor={`material-${i}`} className='textCheckBox'>{e.material}</label>
                </div>
              ))}
            </>
          }
        </div>
        <button 
          className='filterBtn'
          onClick={() => filterBtn()}>
            Показать
        </button>
      </div>
      <div className='verticalLine'></div>
      <div className='catalogProductsContainer'>
        <p className='headerCatalogProducts'>
          Каталог товаров
        </p>
        <div className='blockCards'>
          {productDataFilters === null || productDataFilters.length === 0 ? (
            productData.map((e, i) => (
              <div className='blockProductsInCatalog' key={i}>
                <div className='productMiniCard'>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/producCardPage/${e._id}`}
                  >
                    <div className='imgProductMiniCard'>
                      <img
                        className='imgProductMiniCard'
                        src={e.image.replace("./", "http://127.0.0.1:3000/")}
                        alt="Product"
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
            ))
          ) : (
            productDataFilters.map((e, i) => (
              <div className='blockProductsInCatalog' key={i}>
                <div className='productMiniCard'>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/producCardPage/${e._id}`}
                  >
                    <div className='imgProductMiniCard'>
                      <img
                        className='imgProductMiniCard'
                        src={e.image.replace("./", "http://127.0.0.1:3000/")}
                        alt="Product"
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
            ))
          )}
        </div>
      </div>
    </div>
  )
})
