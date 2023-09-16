import { useState } from 'react';
// import { SelectForm } from '../SelectForm/SelectForm';

import css from './CatalogForm.module.css';
import Select from 'react-select';

const CatalogForm = ({ onSubmit, optionsCarBrand, optionsCarPrice }) => {
 
  const [selectedOptionBrand, setSelectedOptionBrand] = useState(null);
  const [selectedOptionPrice, setSelectedOptionPrice] = useState(null);
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');

  
  
  //
  const handleInputChange = e => {
    console.log(e);
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'from':
        setFromValue(value);
        break;
      case 'to':
        setToValue(value);
        break;
      default:
        return;
    }
  };

  const handlePassParameters = e => {
    e.preventDefault();
    const searchParameters = {
      make: selectedOptionBrand.value,
      rentalPrice: selectedOptionPrice.value,
      from: fromValue,
      to: toValue,
    };
    console.log(searchParameters);
       onSubmit(searchParameters);
    setFromValue('');
    setToValue('');
  };

   const formatOptionLabel = ({ value, label }) => (
    <div>
      To {value} $
    </div>
  );

  return (
    <div>
      <form className={css.form} onSubmit={handlePassParameters}>
        <ul className={css.formList}>
          {/* Select */}
          <li className={css.formItem}>
            <div>
              {/* <SelectForm className={css.formItem} title='1' options={optionscarBrand}/> */}

              <label>
                <h2>1</h2>
                <Select
                  defaultValue={selectedOptionBrand}
                  onChange={setSelectedOptionBrand}
                  options={optionsCarBrand}
                  //   styles={customStyles}
                  placeholder={'Группа'}
                />
              </label>
            </div>
          </li>
          <li className={css.formItem}>
            <div>
              <label>
                <h2>1</h2>
                <Select
                  defaultValue={selectedOptionPrice}
                  onChange={setSelectedOptionPrice}
                  options={optionsCarPrice}
                  //   styles={customStyles}
                  placeholder={'To $'}
                  formatOptionLabel={formatOptionLabel}
                />
              </label>
            </div>
          </li>

          <li>
            <label>From:</label>
            <input
              name="from"
              required
              type="text"
              value={fromValue}
              onChange={e => {
                handleInputChange(e);
              }}
            />
          </li>
          <li>
            <label>To:</label>
            <input
              name="to"
              required
              //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              type="text"
              value={toValue}
              onChange={e => {
                handleInputChange(e);
              }}
            />
          </li>
        </ul>
        <div></div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CatalogForm;
