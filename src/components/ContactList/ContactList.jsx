import Contact from '../Contact/Contact.jsx';
import css from '../ContactList/ContactList.module.css';
import {useSelector} from 'react-redux';
import { selectContactsError, selectContactsLoading, selectFilteredContacts } from '../../redux/contacts/selectors.js';


const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts)
    const loading = useSelector(selectContactsLoading)
    const error = useSelector(selectContactsError)

    return (
        <>
            {loading && <h2>Loading...</h2>}
            {error && <h2>Ops, something wrong...</h2>}
            <ul className={css.list}>
                {filteredContacts.map((contact) => (
                    <Contact
                        key={contact.id}
                        id={contact.id}
                        name={contact.name}
                        number={contact.number}
                    />
                ))}
            </ul>
        </>
    );
};

export default ContactList;