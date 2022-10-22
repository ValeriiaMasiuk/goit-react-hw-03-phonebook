import ContactsForm from "./ContactsForm/ContactsForm";
import { Component } from "react";
import ContactList from "./ContactList/ContactList";
import FilterForm from "./FilterForm/FilterForm";
import shortid from "shortid";
import {MainHeader, SecondHeader} from './App.styled'

class App extends Component {

  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  //   name: '',
  //   number: ''
  // }

  state = {
    contacts: [],
    filter: ''
  }

  addContact = ({ name, number }) => {
    const contactItem = {
      id: shortid.generate(),
      name,
      number,
    }

    this.state.contacts.some(contact => contact.name.toLowerCase().includes(contactItem.name))
      ? alert('You already have a contact with the same name')
      : this.setState(({ contacts }) => ({
      contacts: [contactItem, ...contacts]
    }))   
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  changeFilter = (evt) => {
    this.setState({filter: evt.currentTarget.value})
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    
    const normalizedFilter = filter.toLowerCase();

    return  contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
  }

  render() {
    const { filter } = this.state
    
    const filteredContacts = this.getFilteredContacts();

      return (
        <div
          style={{
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101'
          }}>
          <MainHeader>Phonebook</MainHeader>

          <ContactsForm
            onSubmit={this.addContact}
          />

          <SecondHeader>Contacts</SecondHeader>
          
          <FilterForm
            filter={filter}
            onChange={this.changeFilter}
          />

          <ContactList
            contacts={filteredContacts}
            onContactDelete={this.deleteContact} />
        </div>
        )
    }
};

export default App;
