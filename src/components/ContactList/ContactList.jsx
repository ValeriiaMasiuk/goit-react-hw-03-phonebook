import PropTypes from 'prop-types';
import { ContactsList, ContactItem, DeleteButton, ContactName, ContactNumber } from './ContactList.styled'

const ContactList = ({ contacts, onContactDelete }) => {
    return (
        <ContactsList>
            {contacts.map(({ id, name, number }) => (
                <ContactItem key={id}>
                    <ContactName>{name}</ContactName>
                    <ContactNumber>{number}</ContactNumber>
                    <DeleteButton onClick={() => onContactDelete(id)}>Delete contact</DeleteButton>
                </ContactItem>
            ))}
        </ContactsList>
    )
}

ContactList.propTypes = {
    id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    ]),
    name: PropTypes.string,
    number: PropTypes.number,
}

export default ContactList