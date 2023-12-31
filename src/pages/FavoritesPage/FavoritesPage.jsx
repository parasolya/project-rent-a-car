import { useState } from 'react';
import css from './FavoritesPage.module.css';
import ListCards from '../../components/ListCards/ListCards';
import CatalogForm from '../../components/Form/CatalogForm/CatalogForm';

const FavoritesPage = () => {

  const [favoriteArray, setFavoriteArray] = useState(
    () => JSON.parse(localStorage.getItem('favorite')) ?? []
  );

  const carFavorite = [...new Set(favoriteArray.map(car => car.make))];
  const optionsCarBrand = carFavorite.map(make => ({
    label: make,
    value: make,
  }));

  const carPrice = [];
  for (let i = 10; i <= 600; i += 10) {
    carPrice.push(i);
  }
  const optionsCarPrice = carPrice.map(make => ({ label: make, value: make }));
 
  const formSubmitCatalog = data => {
    const filterObject = data;
    const newCarArray = favoriteArray.map(item => {
      const rentalPrice = parseInt(item.rentalPrice.replace(/\D/g, ''), 10);
     
      return {
        ...item,
        rentalPrice,
      };
    });
    const filteredArray = newCarArray.filter(
      item =>
        item.make === filterObject.make &&
        item.rentalPrice <= filterObject.rentalPrice &&
        item.mileage >= parseInt(filterObject.from, 10) &&
        item.mileage <= parseInt(filterObject.to, 10)
    );
    
    setFavoriteArray(filteredArray);
  };

  const changeFavorite = id => {
    const updatedArray = favoriteArray.filter(i => i.id !== id);
    setFavoriteArray(updatedArray);
  };

  return (
    <div className={css.page}>
      <div>
        <CatalogForm
          onSubmit={formSubmitCatalog}
          optionsCarBrand={optionsCarBrand}
          optionsCarPrice={optionsCarPrice}
        />
      </div>
{ (favoriteArray.length !== 0) ?
      <ListCards items={favoriteArray} onChangeFavoriteArrey={changeFavorite} />
      : (<div className={css.boxText}><p className={css.text}>You haven't added any cars to your favorites yet</p></div>)}
    </div>
  );
};

export default FavoritesPage;
