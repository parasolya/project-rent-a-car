import { useState } from 'react';
// import PropTypes from 'prop-types';
import carArray from '../../dataFile/advertsCars.json';
import CardCar from '../CardCar/CardCar';
import Modal from "../Modal/Modal";
import { fetchCarById } from '../../loadAPI.js';

import css from "./ListCards.module.css";



const ListCards = ({ items, 
  onChangeFavoriteArrey 
}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [foundItems, setFoundItems] = useState({});

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLearnMore = (id) => {
    toggleModal();
    const foundItems = carArray.filter(item => item.id === id);

if (foundItems.length > 0) {
  // Знайдено один або декілька елементів з вказаним id
  setFoundItems(foundItems[0]);
} else {
  // Елементів з таким id не знайдено
  console.log("Елементів не знайдено");
}
  }

  const onFavoriteArrey = (id) => {
    console.log(id)
    onChangeFavoriteArrey(id)
  }
 
  const elements = items.map(item => (
    <CardCar key={item.id}  {...item} 
    onChangeFavoriteArrey={onFavoriteArrey} getLearnMore={handleLearnMore}
    />
  ));

  // {...item.img = item.img || item.photoLink}

  return (
    <>
      <ul className={css.wrapper}>{elements}</ul>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} passObject={foundItems}  onToggleModal={toggleModal}/>
      )}
    </>
  );
};

export default ListCards;

// ListCardsTwo.propTypes = {
//   items: PropTypes.array,
//   onDel: PropTypes.func,
// };
