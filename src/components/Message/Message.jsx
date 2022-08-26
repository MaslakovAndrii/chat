import React from 'react';
import { Avatar } from '@mui/material';
import { format } from 'date-fns'
import MessageIsMe from './MessageIsMe';
import './Message.scss'


const Message = ({ fullName, avatar, text, date, isMe }) => {
     
     return (
          <>
               {isMe
                    ? <MessageIsMe date={date} text={text} />
                    : <div className='message'>
                         <Avatar sx={{
                              width: '45px',
                              height: '45px',
                         }}
                              alt={`avatar ${fullName}`}
                              src={avatar} />
                         <div className='message__content'>
                              <div className='message__bubble'>
                                   <p className='message__text'>
                                        {text}
                                   </p>
                              </div>
                              {/* <time className='message__time'>
                                   {date}
                              </time> */}
                              <time className='message__time'>
                                   {format(date, 'Pp')}
                              </time>
                         </div>
                    </div>
               }
          </>
     );
};

export default Message;