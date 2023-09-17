import { useEffect, useCallback } from 'react';
import css from "./Modal.module.css";

const Modal = ({ passObject, onToggleModal, isOpen}) => {

    console.log(`в модалці ${passObject}`);
    

//     const addressObject = passObject[0].address; // Отримуємо об'єкт адреси
// const address = `${addressObject.street}, ${addressObject.city}, ${addressObject.country}`;
// console.log(address);
    
    const arrayAddress = passObject.address.split(",");
  const country = arrayAddress[arrayAddress.length - 1];
  const city = arrayAddress[arrayAddress.length - 2];

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Escape' && isOpen) {
      onToggleModal();
    }
  }, [isOpen, onToggleModal]);
  
   // Додаємо обробники подій при монтуванні та демонтуванні компонента
   useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress, isOpen]);

   // Обробник для закриття модального вікна при кліку на backdrop
   const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onToggleModal();
    }
  };

  if (!isOpen) {
    return null;
  }
    
const toggleModal =() => {
    onToggleModal();    
}


    return (
        <div className={css.modalBackdrop} onClick={handleBackdropClick}>
        <div className={css.modal}>
           <div className={css.wrapper}>
       <img className={css.cardImg} src={passObject.img} alt="car"/> 
     <div>
        <div>
        <h2>{`${passObject.model}, ${passObject.year}`}</h2>
         <p>{passObject.rentalPrice}</p>
         </div>
         <div>
           <p>{city}<span>|</span>{country}<span>|</span>{passObject.rentalCompany}</p>
           <p>{passObject.type}<span>|</span>{passObject.make}<span>|</span>{passObject.mileage}<span>|</span>{}</p>
        </div>
     </div>
     <div>
        <a href="tel:+380730000000">
          <button>Rental car</button>
        </a>
      </div>
    </div>  
          <button className={css.closeButton} onClick={toggleModal}>
          &#x2715;
          </button>
        </div>
        </div>
    )
};
export default Modal;