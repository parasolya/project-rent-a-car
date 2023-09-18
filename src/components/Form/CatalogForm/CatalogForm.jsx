import { useState } from 'react';
import PropTypes from 'prop-types';
import addCommas from '../../../shared/addCommas';
import css from './CatalogForm.module.css';
import Select from 'react-select';


const customStyles1 = {
  control: (provided, state) => ({
    ...provided,
      height: '48px',
      border: 'none',
      borderRadius: '14px',
      backgroundColor: '#F7F7FB',
      boxShadow: 'none',
      transitionDuration: 'var(--transition-duration)',
      transitionTimingFunction: 'var(--transition-func)',
      transitionProperty: 'border-color',

      width: '210px',
      paddingLeft: '18px',      
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null, 
    }),
  
  menu: base => {
    return {
      ...base,
      border: '1px solid rgba(18, 20, 23, 0.05)',
      borderRadius: '14px',
      color: 'rgba(18, 20, 23, 0.20)',
      fontSize: '16px',
      background: '#FFF',
      boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
    };
  },

  input: base => {
    return {
      ...base,
      color: '#121417',
    };
  },

  valueContainer: base => {
    return {
      ...base,
      color: 'transparent',
      padding: 0,
      margin: 0,
      
    };
  },

  placeholder: base => {
    return {
      ...base,
      color: '#121417',
      fontFamily: 'Manrope',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '20px',
      
    };
  },

  option: (base, state) => {
    return {
      ...base,
      color: state.isFocused && '#121417',
      ':active': {
        color: '#121417',
      },
      cursor: 'pointer',
      background: 'white',
    };
  },

  indicatorsContainer: base => {
    return {
      ...base,
      cursor: 'pointer',
    };
  },
};

const customStyles2 = {
  control: (provided, state) => ({
    ...provided,
      height: '48px',
      border: 'none',
      borderRadius: '14px',
      backgroundColor: '#F7F7FB',
      boxShadow: 'none',
      transitionDuration: 'var(--transition-duration)',
      transitionTimingFunction: 'var(--transition-func)',
      transitionProperty: 'border-color',

      width: '125px',
      paddingLeft: '18px',
    }),
      dropdownIndicator: (provided, state) => ({
        ...provided,
        transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null, 
      }),
    

  menu: base => {
    return {
      ...base,
      border: '1px solid rgba(18, 20, 23, 0.05)',
      borderRadius: '14px',
      color: 'rgba(18, 20, 23, 0.20)',
      fontSize: '16px',
      background: '#FFF',
      boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
    };
  },

  input: base => {
    return {
      ...base,
    };
  },

  valueContainer: base => {
    return {
      ...base,
      color: 'transparent',
      padding: 0,
      margin: 0,
    };
  },

  placeholder: base => {
    return {
      ...base,
      color: '#121417',
      fontFamily: 'Manrope',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '20px',
    };
  },

  option: (base, state) => {
    return {
      ...base,
      color: state.isFocused && '#121417',
      ':active': {
        color: '#121417',
      },
      cursor: 'pointer',
      background: 'white',
    };
  },

  indicatorsContainer: base => {
    return {
      ...base,
      cursor: 'pointer',
    };
  },
};

const CatalogForm = ({ onSubmit, optionsCarBrand, optionsCarPrice }) => {
  const [selectedOptionBrand, setSelectedOptionBrand] = useState(null);
  const [selectedOptionPrice, setSelectedOptionPrice] = useState(null);
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');

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

  const formatOptionLabel = ({ value, label }) => <div>To {value} $</div>;

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handlePassParameters}>
        <div className={css.formList}>
          <ul className={css.listSelect}>
            <li className={css.formItem}>
              <div>
                <label>
                  <h2 className={css.titleItem}>Car brand</h2>
                  <Select
                    className={css.select}
                    defaultValue={selectedOptionBrand}
                    onChange={setSelectedOptionBrand}
                    options={optionsCarBrand}
                    styles={customStyles1}
                    placeholder={'Enter the text'}
                  />
                </label>
              </div>
            </li>
            <li className={css.formItem}>
              <div>
                <label>
                  <h2 className={css.titleItem}>Price/ 1 hour</h2>
                  <Select
                    defaultValue={selectedOptionPrice}
                    onChange={setSelectedOptionPrice}
                    options={optionsCarPrice}
                    styles={customStyles2}
                    placeholder={'To $'}
                    formatOptionLabel={formatOptionLabel}
                  />
                </label>
              </div>
            </li>
          </ul>

          <div className={css.blockInput}>
            <h2 className={css.titleItem}>Сar mileage / km</h2>
            <ul className={css.listInput}>
              <li>
                <label>
                  <input
                    className={css.inputLeft}
                    name="from"
                    required
                    type="text"
                    value={addCommas(fromValue)}
                    onChange={e => {
                      handleInputChange(e);
                    }}
                    placeholder="From:"
                  />
                </label>
              </li>
              <li>
                <label>
                  <input
                    className={css.inputRight}
                    name="to"
                    required
                    //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    type="text"
                    value={addCommas(toValue)}
                    onChange={e => {
                      handleInputChange(e);
                    }}
                    placeholder="To:"
                  />
                </label>
              </li>
            </ul>
          </div>
          <li className={css.btnItem}>
            <button className={css.btnSubmit} type="submit">
              Search
            </button>
          </li>
        </div>
      </form>
    </div>
  );
};

export default CatalogForm;

CatalogForm.propTypes = {
  optionsCarPrice: PropTypes.array,
  optionsCarBrand: PropTypes.array,
  onSubmit : PropTypes.func,
};
