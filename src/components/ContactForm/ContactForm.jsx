import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css'


export function ContactForm({handleSubmit}) {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    handleSubmit(name, number);

      setName("");
      setNumber("")
    
  }


return (
         <div>
           <form className={styles.contactForm} onSubmit={handleFormSubmit}>
              <p>Name</p>
              <input
                className={styles.nameInput}
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={(event) => setName(event.target.value)}
              />
              <p>Number</p>
              <input
                className={styles.numberInput}
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={(event) => setNumber(event.target.value)}              
              />
              <button className={styles.submitBtn} type='submit'>Add contact</button>
  
           </form>
          </div>
      );
}


ContactForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}