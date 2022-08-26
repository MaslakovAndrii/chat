import React from 'react';
import { useSelector } from 'react-redux';
// import { Routes, Route } from 'react-router-dom';
// import { current } from '@reduxjs/toolkit'

import './Chats.scss'

// import DialogsList from '../../components/DialogList/DialogsList';
import Room from '../../components/Room/Room';
// import SidebarHeader from '../../components/SidebarHeader.jsx/SidebarHeader';
import Sidebar from '../../components/Sidebar/Sidebar';
// import store from '../../store';

const Chats = () => {
     const currentRoom = useSelector(state => state.roomReducer.currentRoom)
     const rooms = useSelector(state => state.roomReducer.rooms)
     const messages = currentRoom ? rooms[currentRoom].messages : []
     const user = useSelector(state => state.contactsListReducer.contacts.find(user => user.id === currentRoom))

     return (
          <div className='chats'>
               <Sidebar />
               {currentRoom ? <Room messages={messages} user={user} /> : null}
          </div>
     );
};

export default Chats;