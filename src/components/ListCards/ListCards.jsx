
// import PropTypes from 'prop-types';
import CardCar from '../CardCar/CardCar';
import css from "./ListCards.module.css";

const ListCards = ({ items, 
  // onChangeFavoriteArrey 
}) => {

  // const onFavoriteArrey = (myArray) => {
  //   onChangeFavoriteArrey()
  // }
 
  const elements = items.map(item => (
    <CardCar key={item.id} {...item} 
    // onChangeFavoriteArrey={onFavoriteArrey}
    />
  ));

  return (
    <>
      <ul className={css.wrapper}>{elements}</ul>
    </>
  );
};

export default ListCards;

// ListCardsTwo.propTypes = {
//   items: PropTypes.array,
//   onDel: PropTypes.func,
// };
