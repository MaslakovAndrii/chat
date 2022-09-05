import React from 'react';
import { format } from 'date-fns';


const MessageIsMe = ({ date, text }) => {

     return (
          <div className='message message_is-me'>
               <div className='message__content message__content_is-me'>
                    <div className='message__bubble message__bubble_is-me'>
                         <p className='message__text message__text_is-me'>
                              {text}
                         </p>
                    </div>
                    <time className='message__time'>{format(date, 'Pp')}</time>
               </div>
          </div>
     );
};

export default MessageIsMe;