export const CustomStyles  = {
    control: base => {
      return {
        ...base,
        height: '48px',
        border: 'none',
        borderRadius: '14px',     
        backgroundColor: '#F7F7FB',
        boxShadow: 'none',
        transitionDuration: 'var(--transition-duration)',
        transitionTimingFunction: 'var(--transition-func)',
        transitionProperty: 'border-color',
      };
    },
  
    menu: base => {
      return {
        ...base,
      border: '1px solid rgba(18, 20, 23, 0.05)', 
      //   right: '0',
        borderRadius: '14px',
        
        color: 'rgba(18, 20, 23, 0.20)',
        fontSize: '16px',
      //   lineHeight: '1.3',
        background: '#FFF',
      //   overflow: 'hidden',
      boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
       };
  
      //  color: state.isFocused && 'rgb(255 255 255 / 0.2)',
      //   ':active': {
      //     color: '#121417',
      //   },
  
    },
  
    input: base => {
      return {
        ...base,
        // color: colors.textMainColor,
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
        // color: state.isFocused ? colors.textMainColor : colors.grayColor,
        color: state.isFocused && '#121417',
        ':active': {
          color: '#121417',
        },
        cursor: 'pointer',
        // background: state.isSelected ? '#121417' : 'rgba(18, 20, 23, 0.20',
        background: 'white',
      };
    },
  
    singleValue: base => {
      return {
        ...base,
        // color: colors.textMainColor,
      };
    },
  
    indicatorsContainer: base => {
      return {
        ...base,
        cursor: 'pointer',
      };
    },
  }