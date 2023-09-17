import { useState } from 'react';
// import PropTypes from 'prop-types';
import CardCar from '../CardCar/CardCar';
import Modal from '../Modal/Modal';
import { fetchCarById } from '../../loadAPI.js';

import css from './ListCards.module.css';

const ListCards = ({ items, onChangeFavoriteArrey }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [foundItems, setFoundItems] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLearnMore = id => {
    toggleModal();
    
    const fetchData = async () => {
      try {        
        const car = await fetchCarById(id); 
        setFoundItems(car)    
      } catch (error) {
        console.log(error);
              }
    };
    fetchData();
  };

  const onFavoriteArrey = id => {
    onChangeFavoriteArrey(id);
  };

  const elements = items.map(item => (
    <CardCar
      key={item.id}
      {...item}
      onChangeFavoriteArrey={onFavoriteArrey}
      getLearnMore={handleLearnMore}
    />
  ));

  // {...item.img = item.img || item.photoLink}

  return (
    <>
      <ul className={css.wrapper}>{elements}</ul>
      {isModalOpen && foundItems && (
        <Modal
          isOpen={isModalOpen}
          passObject={foundItems}
          onToggleModal={toggleModal}
        />
      )}
    </>
  );
};

export default ListCards;

// ListCardsTwo.propTypes = {
//   items: PropTypes.array,
//   onDel: PropTypes.func,
// };
