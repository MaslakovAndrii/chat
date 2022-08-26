import React from 'react';
import { useDispatch } from 'react-redux'
import { handleAuth } from '../../store/slice/userSlice';
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth'
import './Auth.scss';
import { useNavigate } from 'react-router-dom';
import { CHAT_ROUTE } from '../../utils/const';
import googleIcon from '../../assets/icons/google_icon-icons.com_62736.png'


const Auth = () => {
     const dispatch = useDispatch()
     const navigate = useNavigate()

     
     function handleSingIn(){
          signInWithPopup(auth, provider).then((result) => {
               dispatch(handleAuth(result.user.displayName))
          })
          navigate(CHAT_ROUTE, {replace: true})
     }

     return (
          <div className='auth'>
               <div className='auth__container'>
                    <button className='auth__sing-in button' onClick={handleSingIn}>
                         <img className='button__icon' src={googleIcon} alt='google-icon'/>
                         <p className='button__text'>Войти</p>
                    </button>
               </div>
          </div>
     );
};

export default Auth;