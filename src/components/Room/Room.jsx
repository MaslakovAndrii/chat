import React, { useEffect } from 'react';

import { Avatar } from '@mui/material';
import './Room.scss'

import AvatarIsActive from '../Avatar/AvatarIsActive';
import Message from '../Message/Message';
import RoomBottom from './Section/RoomBottom';

const Room = ({ messages, user }) => {
     const fullName = `${user.firstName} ${user.lastName}`;

     function lastMessageScroll() {
          const e = document.querySelector('.chat__scroll-bottom');
          if (!e) return;

          e.scrollIntoView({
               behavior: 'auto',
               block: 'end',
          });
     }

     function handleOpenSidebar() {
          const sidebar = document.querySelector('.sidebar')

          if(!sidebar.className.includes('active')) {
               sidebar.classList.add('active');
          } else sidebar.classList.remove('active')

     }

     // function closeSidebar() {
     //      const sidebar = document.querySelector('.sidebar')

     //      if(sidebar.className.includes('active')) {
     //           sidebar.classList.remove('active')
     //      }
     // }

     useEffect(() => {
          lastMessageScroll();
     }, [messages])

     return (
          <div className='room' >
               <section className='room__top top'>
                    <div className='top__burger' onClick={handleOpenSidebar}><span></span></div>
                    <div className='top__content'>
                         {user.isActive
                              ? <AvatarIsActive src={user.avatar} />
                              : <Avatar sx={{
                                   width: '45px',
                                   height: '45px',
                              }}
                                   alt={`avatar ${fullName}`}
                                   src={user.avatar} />}
                         <h2 className='top__full-name'>{fullName}</h2>
                    </div>
               </section>
               <section className='room__chat chat'>
                    <div className='chat__container'>
                         <div className='chat__messages'>
                              {messages?.map(message => {
                                   return <Message key={message.date} date={message.date} text={message.text} avatar={user.avatar} fullName={fullName} isMe={message.isMe} />
                              })}
                         </div>
                         <div className='chat__scroll-bottom'></div>
                    </div>
               </section>
               <RoomBottom roomId={user.id} />
          </div>
     );
};

export default Room;