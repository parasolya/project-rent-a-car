import { useState, useEffect } from 'react';
import ListCards from '../../components/ListCards/ListCards';
import items from '../../dataFile/advertsCars.json';
import carBrand from '../../dataFile/makes.json';
import { fetchCars, fetchCarById, fetchDataAll } from '../../loadAPI.js';
import css from './CatalogPage.module.css';

import CatalogForm from '../../components/Form/CatalogForm/CatalogForm';

const CatalogPage = () => {
  const [filteredArray, setFilteredArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true); // Додаємо стан для перевірки наявності наступної сторінки

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    try {
      setLoading(true);
      const response = await fetchCars(page, 8); // Завантажуємо 8 автомобілів на сторінку
      if (response.length === 0) {
        // Якщо відповідь порожня, то немає наступної сторінки
        setHasNextPage(false);
      } else {
        setFilteredArray(response);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      // Обробка помилки
    } finally {
      setLoading(false);
    }
  };

  const optionsCarBrand = carBrand.map(make => ({
    label: make,
    value: make,
  }));

  const carPrice = [];
  for (let i = 10; i <= 100; i += 10) {
    carPrice.push(i);
  }
  const optionsCarPrice = carPrice.map(make => ({ label: make, value: make }));

  const formSubmitCatalog = data => {
    
    const filterObject = data;
    console.log(filterObject);
    const newCarArray = items.map(item => {
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
    setFilteredArray(filteredArray);
  };

  const changeFavorite = (id) => {
    const fetchData = async () => {
      try {
        
        const Car = await fetchCarById(id);
        console.log(`тут ${Car}`);
        
       
      } catch (error) {
        console.log(error);
        //         // Notiflix.Report.failure(
        //         //   'Sorry, there are no cars today. Please try again next time.'
        //         // );
      }
    };
    fetchData();
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
      {loading ? 'Loading...' : <ListCards items={filteredArray}  onChangeFavoriteArrey={changeFavorite} />}
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
      > <p className={css.textLoadMore} >Load more</p>
        
      </button>
      </div>
    </div>
  );
};

export default CatalogPage;
