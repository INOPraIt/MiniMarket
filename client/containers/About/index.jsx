import React from 'react';
import './style.scss';
import { Placemark, YMaps, Map } from '@pbe/react-yandex-maps';


export default () => {
  return (
    <div className='containerAbout'>
      <p className='headerAbout'>
        Контакты
      </p>
      <div className='boxAbout'>
        <div className='contacts'>
          <img 
            className='imgContacts'
            src={'https://aquastroyst.ru/upload/medialibrary/710/x5u7f9vd7i4a3x1gbzm1laax7oogmavo.jpeg'}
          />
          <div className='address'>
            <div className='left'>
            <div className='blockAdress'>
              <p className='miniTextGrey'>Адресс</p>
              <p className='textnogrey'>355008, г. Ставрополь, пер. Фадеева, д.2</p>
            </div>
            <div className='blockRejim'>
              <p className='miniTextGrey'>Режим работы</p>
              <p className='textnogrey'>Пн. – Пт.: с 9:00 до 18:00</p>
              <p className='textnogrey'>Сб. с 9:00 до 16:00</p>
              <p className='textnogrey'>Вc. выходной</p>
            </div>
            </div>
            <div className='right'>
            <div className='blockAdress'>
            <div className='blockRejim'>
              <p className='miniTextGrey'>Телефон</p>
              <p className='textnogrey'>Магазин: +7 (8652) 955-965</p>
              <p className='textnogrey'>Оптовый отдел: +7 (8652) 955-964</p>
              <p className='textnogrey'>Бухгалтерия: +7 (8652) 941-687</p>
            </div>
            </div>
            <div className='blockAdress'>
            <div className='blockRejim'>
              <p className='miniTextGrey'>E-mail</p>
              <p className='textnogrey'>aquastroy@bk.ru</p>
            </div>
            </div>
            </div>
          </div>
          <div style={{marginTop: '40px'}}>
            <p className='textnogrey'>
              Наш магазин находится в г. Ставрополь. Обязательно приходите к нам на чашку ароматного кофе.
            </p>
            <p className='textnogrey'>
              Совместно обсудим ваши проекты и предложим рекомендации в выборе наилучшей сантехники!
            </p>
          </div>
        </div>
        <div className='maps'>
          <YMaps>
            <Map
              width={'100%'}
              height={'600px'}
              defaultState={{ center: [45.055747, 41.994910], zoom: 16 }}
            >
              <Placemark
                defaultGeometry={[45.055747, 41.994910]}
              />
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  )
}
