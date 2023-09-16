// import PropTypes from "prop-types";
import { useState } from 'react';
import css from "./CardCar.module.css";



const CardCar = ( { id, img, address, model, year, rentalPrice, rentalCompany, type, make, mileage, onChangeFavoriteArrey, getLearnMore }
   ) => {
  
  const arrayAddress = address.split(",");
  const country = arrayAddress[arrayAddress.length - 1];
  const city = arrayAddress[arrayAddress.length - 2];

  const [itemFavorite, setItemFavorite] = useState(false);   
  const [buttonColor, setButtonColor] = useState('white'); 
 

 

  const onLearnMore = (id) => {
    getLearnMore(id);
  };

  // Favorite 

  const localStorageData = localStorage.getItem('favorite');
  
  let myArray = [];

  if (localStorageData) {
    // Якщо дані існують у локальному сховищі, то парсимо їх у масив
    myArray = JSON.parse(localStorageData);
  };

  function isObjectWithIdExists(id) {
    if (Array.isArray(myArray)) {            
    return myArray.some((i) => i.id === id);
  } else {return false};
  };

  if (isObjectWithIdExists(id)) {
    if (!itemFavorite) {
      setItemFavorite(true);
      setButtonColor('red');
    }
  } else {
    if (itemFavorite) {
      setItemFavorite(false);
      setButtonColor('white');
    }
  }

  function toggleObjectWithId(id) {
    let myArray = [];

    const localStorageData = localStorage.getItem('favorite');
    if (localStorageData) {
      // Якщо дані існують у локальному сховищі, то парсимо їх у масив
      myArray = JSON.parse(localStorageData);
    }
  
    if (isObjectWithIdExists(id)) {
      // Якщо об'єкт існує, то видаляємо його з масиву
      myArray = myArray.filter((i) => i.id !== id);
      setItemFavorite(false);
      setButtonColor('white');
    } else {
      // Якщо об'єкта немає, то додаємо його до масиву
      const newObject = {
        id, img, address, model, year, rentalPrice, rentalCompany, type, make, mileage,
      };
      console.log(newObject);
      myArray.push(newObject);
      setItemFavorite(true);
      setButtonColor('red');
    }
  
    // Зберігаємо оновлений масив у локальному сховищі
    
    localStorage.setItem('favorite', JSON.stringify(myArray));   
    onChangeFavoriteArrey(id);
  };

   return (
    <div className={css.wrapper}>
       <img className={css.cardImg} src={img} alt="car"/> 
     <div>
        <div>
        <h2>{`${model}, ${year}`}</h2>
         <p>{rentalPrice}</p>
         </div>
         <div>
           <p>{city}<span>|</span>{country}<span>|</span>{rentalCompany}</p>
           <p>{type}<span>|</span>{make}<span>|</span>{mileage}<span>|</span>{}</p>
        </div>
     </div>
      <div>   
          <button onClick={() => onLearnMore(id)}>Learn more</button>   
  
    </div>
    <div>   
    <button   
        style={{ backgroundColor: buttonColor }}
        onClick={() => toggleObjectWithId(id)}
      >
        Hart
      </button>  
  
    </div>
   
    </div>
  );
};

export default CardCar;

// CardTwo.propTypes = {
//   _id: PropTypes.string,
//   drink: PropTypes.string,
//   instructions: PropTypes.string,
//   drinkThumb: PropTypes.string,
//   onDelete: PropTypes.func,
// };