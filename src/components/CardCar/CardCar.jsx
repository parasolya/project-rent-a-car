import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './CardCar.module.css';
import { ReactComponent as Hart } from '../../images/hart.svg';

const CardCar = ({
  id,
  img = '../src/images/imageCar.jpg',
  address,
  model,
  year,
  rentalPrice,
  rentalCompany,
  type,
  make,
  mileage,
  onChangeFavoriteArrey,
  getLearnMore,
}) => {
  const arrayAddress = address.split(',');
  const country = arrayAddress[arrayAddress.length - 1];
  const city = arrayAddress[arrayAddress.length - 2];

  const [itemFavorite, setItemFavorite] = useState(false);
  const [buttonState, setButtonState] = useState('inactive');

  const onLearnMore = id => {
    getLearnMore(id);
  };

  const localStorageData = localStorage.getItem('favorite');

  let myArray = [];

  if (localStorageData) {
    myArray = JSON.parse(localStorageData);
  }

  function isObjectWithIdExists(id) {
    if (Array.isArray(myArray)) {
      return myArray.some(i => i.id === id);
    } else {
      return false;
    }
  }

  if (isObjectWithIdExists(id)) {
    if (!itemFavorite) {
      setItemFavorite(true);
      setButtonState('active');
    }
  } else {
    if (itemFavorite) {
      setItemFavorite(false);
      setButtonState('inactive');
    }
  }

  function toggleObjectWithId(id) {
    let myArray = [];

    const localStorageData = localStorage.getItem('favorite');
    if (localStorageData) {
      myArray = JSON.parse(localStorageData);
    }

    if (isObjectWithIdExists(id)) {
      myArray = myArray.filter(i => i.id !== id);
      setItemFavorite(false);
      setButtonState('inactive');
    } else {
      const newObject = {
        id,
        img,
        address,
        model,
        year,
        rentalPrice,
        rentalCompany,
        type,
        make,
        mileage,
      };
      console.log(newObject);
      myArray.push(newObject);
      setItemFavorite(true);
      setButtonState('active');
    }

    localStorage.setItem('favorite', JSON.stringify(myArray));
    onChangeFavoriteArrey(id);
  }

  return (
    <div className={css.wrapper}>
      <img className={css.cardImg} src={img} alt="car" />
      <div>
        <div className={css.titleWrapper}>
          <h2 className={css.title}>{`${model || ''}, ${year || ''}`}</h2>
          <p>{rentalPrice || ''}</p>
        </div>
        <div>
          <p className={css.info}>
            {city || ''}
            <span className={css.dash}>|</span>
            {country || ''}
            <span className={css.dash}>|</span>
            {rentalCompany || ''}
          </p>
          <p className={css.info}>
            {type || ''}
            <span className={css.dash}>|</span>
            {make || ''}
            <span className={css.dash}>|</span>
            {mileage || ''}
            <span className={css.dash}>|</span>
            {}
          </p>
        </div>
      </div>
      <div>
        <button
          className={`${css.btnLearnMore} `}
          onClick={() => onLearnMore(id)}
        >
          Learn more
        </button>
      </div>
      <div>
        <button
          className={`${css.btnHart} `}
          onClick={() => toggleObjectWithId(id)}
        >
          <Hart
            fill={buttonState === 'active' ? '#3470FF' : 'none'}
            stroke={buttonState === 'active' ? '#3470FF' : 'white'}
          />
        </button>
      </div>
    </div>
  );
};

export default CardCar;

CardCar.propTypes = {  
  address: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.number,
  rentalCompany: PropTypes.string,
  type: PropTypes.string,
  make: PropTypes.string,
  mileage: PropTypes.number,
  getLearnMore: PropTypes.func,
  onChangeFavoriteArrey: PropTypes.func,
};
