import { useState, useEffect } from 'react';
import ListCards from '../../components/ListCards/ListCards';
import items from '../../dataFile/advertsCars.json';
import carBrand from '../../dataFile/makes.json';
import { fetchCars, fetchCarById } from '../../loadAPI.js';


import CatalogForm from '../../components/Form/CatalogForm/CatalogForm';

const CatalogPage = () => {
  const [filteredArray, setFilteredArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const allCars = await fetchCars();
      console.log(allCars);
      setFilteredArray(allCars);
      setLoading(false);
    } catch (error) {
      console.log(error);        
    }
     finally {
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
    <div>
      <h1>CatalogPage</h1>
      <div>
        <CatalogForm
          onSubmit={formSubmitCatalog}
          optionsCarBrand={optionsCarBrand}
          optionsCarPrice={optionsCarPrice}
        />
      </div>
      {loading ? 'Loading...' : <ListCards items={filteredArray} onChangeFavoriteArrey={changeFavorite} />}
    </div>
  );
};

export default CatalogPage;