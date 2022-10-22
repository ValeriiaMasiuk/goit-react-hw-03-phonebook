import { Component } from "react";
import shortid from "shortid";

class ContactsForm extends Component {
    nameInputId = shortid.generate();
    numberInputId = shortid.generate()

    state = {
        contacts: [],
        name: '',
        number: '',
    }

    handleChange = evt => {
        const {name, value} = evt.currentTarget
        this.setState({
            [name]: value
        })
    }
  
    handleSubmit = evt => {
        evt.preventDefault()
        this.props.onSubmit(this.state)
        this.setState({
            name: '',
            number: '',
        })
        this.reset()
    }
    
    reset = () => {
        this.setState({name: '', number: ''})
    }

    render() {
        return (
            <div>
                <form autoComplete="off"
                    onSubmit={this.handleSubmit}
                >
                <label htmlFor={this.nameInputId}>
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleChange}
                    value={this.state.name}
                    id={this.nameInputId}
                />
                </label>
                    
                <label htmlFor={this.numberInputId}>
                Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleChange}
                    value={this.state.number}
                    id={this.numberInputId}
                />
                </label>
                <button type="submit">Add Contact</button>
                </form>
            </div>
        )
    }
}

export default ContactsForm