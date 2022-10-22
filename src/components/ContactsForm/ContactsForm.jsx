import { Component } from "react";
import shortid from "shortid";
import PropTypes from 'prop-types';
import {FormWrapper, AddForm, AddLabel, AddInput, AddButton} from './ContactsForm.styled'

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
            <FormWrapper>
                <AddForm autoComplete="off"
                    onSubmit={this.handleSubmit}
                >
                <AddLabel htmlFor={this.nameInputId}>
                Name
                <AddInput
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleChange}
                    value={this.state.name}
                    id={this.nameInputId}
                />
                </AddLabel>
                    
                <AddLabel htmlFor={this.numberInputId}>
                Number
                <AddInput
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleChange}
                    value={this.state.number}
                    id={this.numberInputId}
                />
                </AddLabel>
                <AddButton type="submit">Add Contact</AddButton>
                </AddForm>
            </FormWrapper>
        )
    }
}

ContactsForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
    numberInputId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    ]),
    handleChange: PropTypes.func,
}

export default ContactsForm