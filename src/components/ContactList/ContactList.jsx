import PropTypes from 'prop-types';

export const ContactList = ({ filterContacts, onDeleteContact }) => {
    
    return (

        <ul>            
                {filterContacts().map((contact) => (
                    <li key={contact.id}>
                        <span>{contact.name} {contact.number}</span>
                        <button type="button" onClick={() => onDeleteContact(contact.id)}>Delete</button>
                    </li>
                    ))}             
        </ul>
    )
}


ContactList.propTypes = {
    filterContacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}