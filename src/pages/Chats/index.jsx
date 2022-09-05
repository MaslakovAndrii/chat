import React from 'react';
import { useSelector } from 'react-redux';

import './Chats.scss';

import Room from '../../components/Room/Room';
import Sidebar from '../../components/Sidebar/Sidebar';

const Chats = () => {
     const currentRoom = useSelector(state => state.roomReducer.currentRoom);
     const rooms = useSelector(state => state.roomReducer.rooms);
     const messages = currentRoom ? rooms[currentRoom].messages : [];
     const user = useSelector(state => state.contactsListReducer.contacts.find(user => user.id === currentRoom));

     return (
          <div className='chats'>
               <Sidebar />
               {currentRoom ? <Room messages={messages} user={user} /> : null}
          </div>
     );
};

export default Chats;