import React from "react";

const ContactList = ({ contacts, onContactDelete }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <li key={id}>
                    <p>{name}</p>
                    <p>{number}</p>
                    <button onClick={() => onContactDelete(id)}>Delete contact</button>
                </li>
            ))}
        </ul>
    )
}

export default ContactList