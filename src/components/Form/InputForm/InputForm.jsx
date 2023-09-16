    import { useState } from 'react';
// import css from './Phonebook.module.css';

// const InputForm ({ onSubmit }) {

export const InputForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleContactAdd = e => {
    e.preventDefault();
    const contact = {
      name,
      number,
    };
    console.log(contact);
    // onSubmit(contact);
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form  onSubmit={handleContactAdd}>
{/* Select */}




        <label style={{ display: 'flex' }}>
        <span>Name:</span>
          <input          
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={e => {
              handleInputChange(e);
            }}
            value={name}
          />
        </label>
        <label  style={{ display: 'flex' }}>
        <span>Number:</span>
          <input          
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={e => {
              handleInputChange(e);
            }}
          />
        </label>
        <button  type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
