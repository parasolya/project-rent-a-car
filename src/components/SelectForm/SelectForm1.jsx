import React, { useState } from 'react';
// import { nanoid } from 'nanoid';
import Select from 'react-select';
import css from './SelectForm.module.css';
import { customSelectStyles as selectStyles } from './reactSelectBaseStyles';
// import { colors } from '../../../../styles/GlobalStyles';


const customSelectComponents = {
  IndicatorSeparator: () => null,
};

// переопределяем нужные стили
export const customStyles = {
  ...selectStyles,

  control: base => {
    return {
      ...base,
      height: '50px',
     
      fontSize: '16px',
      letterSpacing: '-0.32px',
      // color: colors.textMainColor,
      color: 'black',
      borderRadius: '200px',
      // border: `1px solid ${colors.grayColor}`,
      border: '1px solid grey',
      ':hover': {
        // borderColor: colors.textMainColor,
        color: 'black',
      },
      backgroundColor: 'transparent',
      boxShadow: 'none',
      transitionDuration: 'var(--transition-duration)',
      transitionTimingFunction: 'var(--transition-func)',
      transitionProperty: 'border-color',
    };
  },

  valueContainer: base => {
    return {
      ...base,
      // color: colors.textMainColor,
      color: 'black',
      paddingLeft: '18px',
      paddingRight: '18px',
      margin: 0,
    };
  },

  indicatorsContainer: base => {
    return {
      ...base,
      marginRight: '10px',
      cursor: 'pointer',
    };
  },
};


// ...............color: 'grey',   color: 'black',

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

// const customStyles = {
//     control: (provided, state) => ({
//       ...provided,
//       border: '1px solid #ccc', // Граница контейнера
//       borderRadius: '4px', // Закругление углов
//       overflow: 'hidden',
//     }),
//     dropdownIndicator: (provided, state) => ({
//       ...provided,
//       transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null, // Поворачиваем стрелку при открытом списке
//     }),
//   };



const carBrand = ['Buick', 'Volvo', 'Hummer', 'Subaru'];

export const SelectForm1 = ( {title} ) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = carBrand.map((value) => ({
    value,
    label: `${value}`, 
  }));

  console.log(options);

const handleChange = () => {
    // this.setState({value: event.target.value});
  }

//   handleSubmit(event) {
    // alert('Ваш любимый вкус: ' + this.state.value);
    // event.preventDefault();
//   }

  // const elements = carBrand.map(item => (
  //   <option value={item}>
  //     {item}
  //   </option>
  // ));

  return (
    <div>
        {/* <label>
        {title}
        <div className="select-container">
 <select className={css.select} value={title} onChange={handleChange()}>
            
            {elements}
           
            </select>
        </div>
        </label> */}

      <label>
        {title}

       
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          // styles={customStyles}
          placeholder ={'Группа опасности'}
        />
      </label>
    </div>
  );
};
