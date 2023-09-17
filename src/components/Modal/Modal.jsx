import { useEffect, useCallback } from 'react';
import css from "./Modal.module.css";
import { ReactComponent as Close } from '../../images/close.svg';

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
        <div className={css.titleWrapper}>
        {/* <h2 className={css.title} >{`${passObject.model}, ${passObject.year}`}</h2> */}
        <h2 className={css.title} >{passObject.make}<span className={css.accentСolor}>{` ${passObject.model}`}</span> {`, ${passObject.year}`}</h2>    
         </div>
         <div>
           <p className={css.info}>{city}<span className={css.dash}>|</span>{country}<span className={css.dash}>|</span>{passObject.rentalCompany}</p>
           <p className={css.info}>{passObject.type}<span className={css.dash}>|</span>{passObject.make}<span className={css.dash}>|</span>{passObject.mileage}<span className={css.dash}>|</span>{}</p>
        </div>
        <p className={css.description}>{passObject.description}</p>
        <div >
       
        <h3 className={css.titleAccessories} >Accessories and functionalities:</h3>
        
         
           <p className={css.info}>{city}<span className={css.dash}>|</span>{country}<span className={css.dash}>|</span>{passObject.rentalCompany}</p>
           <p className={css.info}>{passObject.type}<span className={css.dash}>|</span>{passObject.make}<span className={css.dash}>|</span>{passObject.mileage}<span className={css.dash}>|</span>{}</p>
               
         </div>
         <div >
       
        <h3 className={css.titleConditions} >Rental Conditions: </h3>
        <ul className={css.listConditions}>
          <li className={css.itemConditions}><p>Minimum age :</p></li>
          <li className={css.itemConditions}><p>Valid driver’s license</p></li>
          <li className={css.itemConditions}><p>Security deposite required </p></li>
          <li className={css.itemConditions}><p>Mileage:</p></li>
          <li className={css.itemConditions}><p>Price: <span className={css.value}>{passObject.rentalPrice}</span></p></li>
        </ul>
        
         </div>
     </div>
     <div>
        <a href="tel:+380730000000">
          <button className={css.btnRent}>Rental car</button>
        </a>
      </div>
    </div>  
          <button className={css.closeButton} onClick={toggleModal}>
          <Close fill='rgba(18, 20, 23, 1)' width='24px'
height='24px'/>
          </button>
        </div>
        </div>
    )
};
export default Modal;