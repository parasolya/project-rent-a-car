import { useState, useEffect } from 'react';
// import CatalogForm from '../../components/Form/CatalogForm/CatalogForm';
import ListCards from "../../components/ListCards/ListCards";

const FavoritesPage = () => {
    const [favoriteArray, setFavoriteArray] = useState(
      () => JSON.parse(localStorage.getItem('favorite')) ?? []
    );
  
        useEffect(() => {
        // Функція, яка буде викликана при зміні localStorage
        const handleStorageChange = (e) => {
          if (e.key === 'favorite') {
            const updatedFavoriteArray = JSON.parse(e.newValue);
            setFavoriteArray(updatedFavoriteArray);
          }
        };
    
        // Додаємо "слухача" для події зміни localStorage
        window.addEventListener('storage', handleStorageChange);
    
        // При відмонтажі компонента видаляємо "слухача"
        return () => {
          window.removeEventListener('storage', handleStorageChange);
        };
      }, []);

 
return (
        <div>
    <h1>FavoritesPage</h1>

    <div>
        {/* <CatalogForm onSubmit={formSubmitCatalog} optionsCarBrand={optionsCarBrand} optionsCarPrice={optionsCarPrice} /> */}
    </div>     


    <ListCards items={favoriteArray} 
    // onChangeFavoriteArrey={changeFavorite} 
    />

    </div>
    )
}

export default FavoritesPage;