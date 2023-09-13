// import PropTypes from "prop-types";


const CardCar = ({ id, model, year, img="", rentalPrice, address, rentalCompany, type, make, mileage }) => {
 
  
  const arrayAddress = address.split(",");
  const country = arrayAddress[arrayAddress.length - 1];
  const city = arrayAddress[arrayAddress.length - 2];

  const onLearnMore = (id) => {}

  return (
    <div>
       <img src={img} alt="car"/> 
     <div>
        <div>
        <h2>{`${model}, ${year}`}</h2>
         <p>{rentalPrice}</p>
         </div>
         <div>
           <p>{city}<span>|</span>{country}<span>|</span>{rentalCompany}</p>
           <p>{type}<span>|</span>{make}<span>|</span>{mileage}<span>|</span>{}</p>
        </div>
     </div>
      <div>   
          <button onClick={() => onLearnMore(id)}>Learn more</button>   
  
    </div>
    </div>
  );
};

export default CardCar;

// CardTwo.propTypes = {
//   _id: PropTypes.string,
//   drink: PropTypes.string,
//   instructions: PropTypes.string,
//   drinkThumb: PropTypes.string,
//   onDelete: PropTypes.func,
// };