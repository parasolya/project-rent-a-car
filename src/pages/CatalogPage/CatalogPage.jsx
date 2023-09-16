import { useState} from 'react';
import ListCards from "../../components/ListCards/ListCards";
import items from '../../advertsCars.json';
// import { nanoid } from 'nanoid';
// import { SelectForm1 } from "../../components/SelectForm/SelectForm1";
// import { SelectForm2 } from "../../components/SelectForm/SelectForm2";
// import { InputForm } from "../../components/Form/InputForm/InputForm";


import CatalogForm from '../../components/Form/CatalogForm/CatalogForm'

const CatalogPage = ()=> { 
    // const startContacts = [];
    // const [contacts, setContacts] = useState(
    //     () => JSON.parse(window.localStorage.getItem('contacts')) ?? startContacts
    //   );
      const [filteredArray, setFilteredArray] = useState(items); 

    const carBrand = [...new Set(items.map(car => car.make))];
  const optionsCarBrand = carBrand.map(make => ({ label: make, value: make }));

  const carPrice = [];
  for (let i = 10; i <= 100; i += 10) {
    carPrice.push(i);
  }
 const optionsCarPrice = carPrice.map(make => ({ label: make, value: make }));
  
    const formSubmitCatalog = data => {
        // data.id = nanoid();
        const filterObject = data;
        console.log(filterObject);
        const newCarArray = items.map((item) => {
            const rentalPrice = parseInt(item.rentalPrice.replace(/\D/g, ''), 10); // Убираем все символы кроме цифр
          
            return {
              ...item, // Копируем все поля из исходного объекта
              rentalPrice, // Заменяем поле "rentalPrice" на числовое значение
            };
          });       
          console.log(newCarArray);     
              // Фильтруем массив по заданным условиям
              const filteredArray = newCarArray.filter((item) => (
                item.make === filterObject.make &&
                item.rentalPrice <= filterObject.rentalPrice &&
                item.mileage >= parseInt(filterObject.from, 10) &&
                item.mileage <= parseInt(filterObject.to, 10)
              ));
              console.log(filteredArray);  
              setFilteredArray(filteredArray);

      };
      
      


    return (
        <div>
    <h1>CatalogPage</h1>
    <div>
        <CatalogForm onSubmit={formSubmitCatalog} optionsCarBrand={optionsCarBrand} optionsCarPrice={optionsCarPrice} />
    </div>     


    <ListCards items={filteredArray} />
    </div>
    )
}

export default CatalogPage;
