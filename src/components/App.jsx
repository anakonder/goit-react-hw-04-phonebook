import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';




export const App = () => {
  
    const [contacts, setContacts] = useState([]);
    const [filter, setFilter] = useState('');
  
  useEffect(() => {    
    if (localStorage.getItem("contacts")) {
        setContacts(JSON.parse(localStorage.getItem("contacts")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

 
  const handleSubmit = (name, number) => {    
   
    const id = nanoid()        
    
    if (Boolean(contacts.find(contact => contact.name === name))) {
      alert(`${name} is already in contacts`)
      return
    }

    const newContact = {name, number, id}    
    
        setContacts([...contacts, newContact])
       
  }

  const handleFilterChange = (event) => {
    const name = event.target.value.toLowerCase()
    setFilter(name)
    
  }

  const filterContacts = (filter) => {
         return contacts.filter((contact) => contact.name.toLowerCase().includes(filter))
  }

  const deleteContact = (contactId) => {
    
    setContacts(contacts.filter((contact) => contact.id !== contactId))
  
  }
  
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          handleSubmit={handleSubmit}
        />
        <h2>Contacts</h2>
        <Filter
          handleFilterChange={handleFilterChange}
        />
        <ContactList
          filterContacts={() => filterContacts(filter)}
          onDeleteContact={deleteContact}
        />
      </div>
    );  
}


