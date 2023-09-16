import Select from 'react-select';
import { useState } from 'react';


const customStyles = {  
  
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

  

export const SelectForm = ({ title, options}) => {
    // const [value, setValue] = useState('');

    const [selectedOption, setSelectedOption] = useState(null);

    // const sendData = () => {
    //     const data = 'Hello from Child';
    //     sendDataToParent(data);
    //   };

    return (
        <label>
        <h2>{title}</h2>      
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          styles={customStyles}
          placeholder ={'Группа'}
        />
      </label>
    )
}