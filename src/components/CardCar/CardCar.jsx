// import PropTypes from "prop-types";
import { useState } from 'react';
import css from "./CardCar.module.css";


const CardCar = ( item,
  //  onChangeFavoriteArrey 
   ) => {
  
  const img = item.img || item.photoLink;

  const arrayAddress = item.address.split(",");
  const country = arrayAddress[arrayAddress.length - 1];
  const city = arrayAddress[arrayAddress.length - 2];

  const onLearnMore = (id) => {}

  // 
  const [itemFavorite, setItemFavorite] = useState(false); 
  
  const [buttonColor, setButtonColor] = useState('white'); 

  const localStorageData = localStorage.getItem('favorite');
  
  let myArray = [];

  if (localStorageData) {
    // Якщо дані існують у локальному сховищі, то парсимо їх у масив
    myArray = JSON.parse(localStorageData);
  };

  function isObjectWithIdExists(item) {
    if (Array.isArray(myArray)) {            
    return myArray.some((i) => i.id === item.id);
  } else {return false};
  };

  if (isObjectWithIdExists(item)) {
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

  function toggleObjectWithId(item) {
    let myArray = [];

    const localStorageData = localStorage.getItem('favorite');
    if (localStorageData) {
      // Якщо дані існують у локальному сховищі, то парсимо їх у масив
      myArray = JSON.parse(localStorageData);
    }
  
    if (isObjectWithIdExists(item)) {
      // Якщо об'єкт існує, то видаляємо його з масиву
      myArray = myArray.filter((i) => i.id !== item.id);
      setItemFavorite(false);
      setButtonColor('white');
    } else {
      // Якщо об'єкта немає, то додаємо його до масиву
      const newObject = item;
      myArray.push(newObject);
      setItemFavorite(true);
      setButtonColor('red');
    }
  
    // Зберігаємо оновлений масив у локальному сховищі
    
    localStorage.setItem('favorite', JSON.stringify(myArray));   
    // onChangeFavoriteArrey(item);
  };

   return (
    <div className={css.wrapper}>
       <img className={css.cardImg} src={img} alt="car"/> 
     <div>
        <div>
        <h2>{`${item.model}, ${item.year}`}</h2>
         <p>{item.rentalPrice}</p>
         </div>
         <div>
           <p>{city}<span>|</span>{country}<span>|</span>{item.rentalCompany}</p>
           <p>{item.type}<span>|</span>{item.make}<span>|</span>{item.mileage}<span>|</span>{}</p>
        </div>
     </div>
      <div>   
          <button onClick={() => onLearnMore(item.id)}>Learn more</button>   
  
    </div>
    <div>   
    <button   
        style={{ backgroundColor: buttonColor }}
        onClick={() => toggleObjectWithId(item)}
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