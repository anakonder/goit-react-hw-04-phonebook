import { Component } from 'react';
import { nanoid } from 'nanoid'

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';




export class App extends Component {
  state = {
      contacts: [],
      filter: ''
  };
  
  componentDidMount() {
    const savedContacts = localStorage.getItem("contacts")
    if (savedContacts) {
      this.setState({contacts: JSON.parse(savedContacts)})
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }
  

 
  handleSubmit(state) {

    
   
    const id = nanoid()    
    const { name, number } = state
    
    const { contacts } = this.state
    if (Boolean(contacts.find(contact => contact.name === name))) {
      alert(`${name} is already in contacts`)
      return
    }

    const newContact = {name, number, id}
    
    this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact]
    }));
   
  }

  handleFilterChange = (event) => {
    const name = event.target.value.toLowerCase()
    this.setState(
      {filter: name}
    )
    
  }

  filterContacts(filter) {
         return this.state.contacts.filter((contact) => contact.name.toLowerCase().includes(filter))
  }

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
    contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
  }));
  }



  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          handleSubmit={this.handleSubmit.bind(this)}
        />
        <h2>Contacts</h2>
        <Filter
          handleFilterChange={this.handleFilterChange}
        />
        <ContactList
          filterContacts={() => this.filterContacts(this.state.filter)}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );  
  }
};

