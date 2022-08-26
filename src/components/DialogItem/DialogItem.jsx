import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { setRoom } from '../../store/slice/roomSlice';
import shave from 'shave';
import { format} from 'date-fns'

import { Avatar } from '@mui/material';
import './DialogItem.scss'

import AvatarIsActive from '../Avatar/AvatarIsActive';



const DialogItem = ({ user }) => {
     const { avatar, firstName, lastName, lastActivity, isActive, id } = user;
     const roomMessages = useSelector(state => state.roomReducer.rooms[id].messages);
     const lastMessage = roomMessages?.[roomMessages.length - 1];
     const dispatch = useDispatch();

     useEffect(() => {
          shave('p', 48, { classname: 'dialog-item__last-message' });
     });

     function openRoom() {
          dispatch(setRoom(id));
     }


     return (
          // <Link to={`${id}`}>
               <article onClick={openRoom} className='item-dialog'>
                    {isActive
                         ? <AvatarIsActive src={avatar} />
                         : <Avatar sx={{
                              width: '45px',
                              height: '45px',
                         }}
                              alt={`avatar`}
                              src={avatar} />}
                    <div className='item-dialog__content'>
                         <div className='item-dialog__top'>
                              <h3 className='item-dialog__full-name'>
                                   {`${firstName} ${lastName}`}
                              </h3>
                              <time className='item-dialog__last-active'>{format(lastActivity, 'PP')}</time>
                         </div>
                         <p className='item-dialog__last-message'>{lastMessage?.text}</p>
                    </div>
               </article>
          // </Link>
     );
};

export default DialogItem;