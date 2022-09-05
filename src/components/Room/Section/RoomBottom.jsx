import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage, addAnswer } from '../../../store/slice/roomSlice';
import { changeSequence, setLastActivity } from '../../../store/slice/contactsSlice';
import axios from 'axios';

import SendIcon from '@mui/icons-material/Send';

const RoomBottom = ({ roomId }) => {
     const [textMessage, setTextMessage] = useState('');
     const dispatch = useDispatch()

     async function getAnswer() {
          const result = await axios.get('https://api.chucknorris.io/jokes/random');
          const time = new Date().getTime();
          dispatch(addAnswer([roomId, { date: time, text: result.data.value, isMe: false }]));
          dispatch(setLastActivity([roomId, time]));
          dispatch(changeSequence(roomId));
     }

     function sendMessage(e) {
          e.preventDefault();
          if (textMessage) {
               dispatch(addMessage([roomId, { date: new Date().getTime(), text: textMessage, isMe: true }]));
               setTextMessage('');
               setTimeout(getAnswer, 10000);
          }
     }

     return (
          <section className='room__bottom'>
               <form className='room__form' onSubmit={e => sendMessage(e)}>
                    <input className='room__input' placeholder='Type your message' value={textMessage} onChange={e => setTextMessage(e.target.value)} />
                    <button className='room__enter-button' type='submit'>
                         <SendIcon />
                    </button>
               </form>
          </section>
     );
};

export default RoomBottom;