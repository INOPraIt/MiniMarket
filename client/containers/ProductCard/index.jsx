import React from 'react';
import { toast } from 'react-toastify';
import './style.scss';
import { connect } from 'react-redux';
import { getProductById } from '../../store/actions/product.action';
import { useParams } from 'react-router-dom';
import { addProductToCart } from '../../store/actions/cart.action';

import photoProductCard from '../../assets/images/categoris/1.png';

export default connect(
  (s) => ({
    productByIdData: s.product.dataByIdProduct,
  }),
  {
    getProductById,
    addProductToCart
  }
)(({ 
  productByIdData,
  getProductById, 
  addProductToCart 
}) => {
    const { id } = useParams();
    console.log(productByIdData);

    React.useEffect(() => {
      if (!id) {
        return <p>Товар не найден</p>
      }
      getProductById(id)
    }, [id]);

    function addToCartInProductCard(product) {
      addProductToCart({product})
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
    }

  return (
    <div className='productCardContainer'>
      <div className='leftBlockProductCard'>
        <div className='photoProductCard'>
          <div className='imgPhotoProductCard'>
            <img
              src={productByIdData.image.replace("./", "http://127.0.0.1:3000/")}
              className='imgProductCard'
            />
          </div>
        </div>
        <div className='headerProductCard'>
          <div className='divSaleProcent'>
            Выгодная цена
          </div>
          <p className='headerNamedProduct'>
            {productByIdData.named}
          </p>
          <p className='priceNumberProductCard'>
            {productByIdData.price} ₽
          </p>
          <p className='descriptionTextProductCard'>
            Описание
          </p>
          <p className='descriptionProductCard'>
            {productByIdData.description}
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
              Цвет: 
            </p>
            <p className='named'>
              {productByIdData.color}
            </p>
          </div>
          <div className='textAndText'>
            <p className='namedText'>
              Материалы: 
            </p>
            <p className='named'>
              {productByIdData.material}
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
              onClick={() => addToCartInProductCard(productByIdData)}
              className='addToCartProductCard'>
              Добавить товар в корзину
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
})
