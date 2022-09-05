import React from 'react';
import { useSelector } from 'react-redux';

import './DialogsList.scss';

import DialogItem from '../DialogItem/DialogItem';


const DialogsList = () => {

     const searchedContacts = useSelector(state => state.contactsListReducer.searchedContacts);

     return (
          <ul className='dialogs-list'>
               {searchedContacts.map(user => {
                    return <DialogItem user={user} key={user.id} />
               })}
          </ul>
     );
};

export default DialogsList;