
// import PropTypes from 'prop-types';
import CardCar from '../CardCar/CardCar';
import items from '../../advertsCars.json';

const ListCards = ({  }) => {
 
  const elements = items.map(item => (
    <CardCar key={item.id} {...item} />
  ));

  return (
    <>
      <ul>{elements}</ul>
    </>
  );
};

export default ListCards;

// ListCardsTwo.propTypes = {
//   items: PropTypes.array,
//   onDel: PropTypes.func,
// };
