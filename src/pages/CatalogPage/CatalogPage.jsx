import { useState, useEffect } from 'react';
import ListCards from '../../components/ListCards/ListCards';
import carBrand from '../../dataFile/makes.json';
import { fetchCars, fetchDataAll } from '../../loadAPI.js';
import css from './CatalogPage.module.css';

import CatalogForm from '../../components/Form/CatalogForm/CatalogForm';

const CatalogPage = () => {
  const [filteredArray, setFilteredArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [allCars, setAllCars] = useState([]);

  useEffect(() => {
    fetchData(currentPage);
    const fetchAllData = async () => {
      try {
        const allCars = await fetchDataAll(); 
        
        setAllCars(allCars)
      } catch (error) {
        console.error(error);
      } 
    };
    fetchAllData();
  }, [currentPage]);

  const fetchData = async page => {
    try {
      setLoading(true);
      const response = await fetchCars(page, 8); 
      if (response.length === 0) {
        setHasNextPage(false);
      } else {
        setFilteredArray(response);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const optionsCarBrand = carBrand.map(make => ({
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
    const newCarArray = allCars.map(item => {
      const rentalPrice = parseInt(item.rentalPrice.replace(/\D/g, ''), 10);
      return {
        ...item,
        rentalPrice,
      };
    });

    const filteredCars = newCarArray.filter(
      item =>
        item.make === filterObject.make &&
        item.rentalPrice <= filterObject.rentalPrice &&
        item.mileage >= parseInt(filterObject.from, 10) &&
        item.mileage <= parseInt(filterObject.to, 10)
    );
    setFilteredArray(filteredCars);
  };

  const changeFavorite = id => {};

  return (
    <div className={css.page}>
      <div>
        <CatalogForm
          onSubmit={formSubmitCatalog}
          optionsCarBrand={optionsCarBrand}
          optionsCarPrice={optionsCarPrice}
        />
      </div>
      {loading ? (
        'Loading...'
      ) : (
        <ListCards
          items={filteredArray}
          onChangeFavoriteArrey={changeFavorite}
        />
      )}
      <div>
        <button
          onClick={() => {
            if (hasNextPage) {
              const nextPage = currentPage + 1;
              setCurrentPage(nextPage);
            }
          }}
          style={{ display: hasNextPage ? 'block' : 'none' }}
          className={css.btnLoadMore}
        >
          {' '}
          <p className={css.textLoadMore}>Load more</p>
        </button>
      </div>
    </div>
  );
};

export default CatalogPage;
