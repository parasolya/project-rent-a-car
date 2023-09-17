import { useState, useEffect } from 'react';
import ListCards from '../../components/ListCards/ListCards';
import items from '../../dataFile/advertsCars.json';
import carBrand from '../../dataFile/makes.json';
import { fetchCars, fetchCarById } from '../../loadAPI.js';


import CatalogForm from '../../components/Form/CatalogForm/CatalogForm';

const CatalogPage = () => {
  const [filteredArray, setFilteredArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [allCars, setAllCars] = useState([]);

  const fetchData = async (page = 1, limit = 8) => {
    try {
      setLoading(true);
      const response = await fetchCars(page, limit);
      setAllCars((prevCars) => [...prevCars, ...response]);
      
      setTotalPages(response.totalPages);
      setCurrentPage(page);
    } catch (error) {
      console.error(error);
      // Обробка помилки
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Перша сторінка загрузки
  }, []);

  const optionsCarBrand = carBrand.map((make) => ({
    label: make,
    value: make,
  }));

  const carPrice = [];
  for (let i = 10; i <= 100; i += 10) {
    carPrice.push(i);
  }
  const optionsCarPrice = carPrice.map((make) => ({ label: make, value: make }));

  const formSubmitCatalog = (data) => {
    const filterObject = data;
    const newCarArray = allCars.map((item) => {
      const rentalPrice = parseInt(item.rentalPrice.replace(/\D/g, ''), 10);

      return {
        ...item,
        rentalPrice,
      };
    });

    const filteredArray = newCarArray.filter(
      (item) =>
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
        console.log(`тут ${id}`);
        const Car = await fetchCarById(9619);
        console.log(`тут ${Car}`);
      } catch (error) {
        console.log(error);
        // Обробка помилки
      }
    };
    fetchData();
  };

  return (
    <div>
      <h1>CatalogPage</h1>
      <div>
        <CatalogForm
          onSubmit={formSubmitCatalog}
          optionsCarBrand={optionsCarBrand}
          optionsCarPrice={optionsCarPrice}
        />
      </div>
      <button
        onClick={() => {
          const nextPage = currentPage + 1;
          if (nextPage <= totalPages) {
            fetchData(nextPage); // Виклик з параметрами сторінки
          }
        }}
        style={{ display: currentPage < totalPages ? 'block' : 'none' }}
      >
        Load more
      </button>
      {loading ? 'Loading...' : <ListCards items={allCars} onChangeFavoriteArrey={changeFavorite} />}
    </div>
  );
};

export default CatalogPage;