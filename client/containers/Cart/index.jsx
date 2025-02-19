import React from 'react';
import './style.scss';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, changeUserFieldAction } from '../../store/actions/user.actions';
import { deleteProductToCart } from '../../store/actions/cart.action';

import cran from '../../assets/images/categoris/1.png';

export default connect((s) => ({
  isLogined: s.user.logined,
  productCart: s.cart.cart
}), {
  loginUser,
  changeUserFieldAction,
  deleteProductToCart
})(
  ({
    id,
    loginUser,
    isLogined,
    changeUserFieldAction,
    deleteProductToCart,
    productCart
  }) => {
    const navigate = useNavigate();

    React.useEffect(() => {
      if (isLogined === null) {
        toast.error('Авторизируйтесь', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate('/login');
      }
    }, [isLogined]);

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

    function deletedProductInCart() {
      toast.error('Товар удален из корзины', {
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

    const totalPrice = productCart.reduce((sum, product) => sum + Number(product.price), 0);

    return (
      <div className='cartContainer'>
        <p className='headerCart'>
          Ваша корзина
        </p>
        <div className='containerCards'>
          {productCart.map((e, i) => (
            <div>
              <div className='cardInCart'>
                <img
                  src={e.image.replace("./", "http://127.0.0.1:3000/")}
                  className='imgIndex'
                />
                <div className='textsCranCardInToCart'>
                  <p className='namedCran'>
                    {e.named}
                  </p>
                  <p className='descriptionCard'>
                    {e.description}
                  </p>
                  <p className='descriptionCard'>
                    {e.price} ₽
                  </p>
                  <div>
                    <button
                      onClick={() => {
                        toast.error('Товар удален из корзины', {
                          position: "top-right",
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: false,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "dark",
                        });
                        deleteProductToCart({productId: e._id})
                      }}
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
          <p className='priceOrderText'>Сумма {totalPrice} ₽</p>
          <button
            onClick={notify}
            className='btnCreateOrder'>
            Оформить заказ
          </button>
        </div>
      </div>
    )
  })
