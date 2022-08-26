// import { Typography, Button, TextField } from '@mui/material';
// import { Container, Box } from '@mui/system';
// import React from 'react';
// import { Controller, useForm } from 'react-hook-form';
// import { Link as RouterLink } from 'react-router-dom';
// import { REGISTRATION_ROUTE } from '../../utils/const';




// const Auth = () => {

//      const { register, handleSubmit, formState: { errors }, reset, control } = useForm({
//           mode: 'onBlur',
//           defaultValues: {
//                email: "",
//                password: "",

//           }
//      })

//      const onSubmit = data => {
//           // const  auth = getAuth();

//           // const { email, password } = data

//           // signInWithEmailAndPassword(auth, email, password)
//           //      .then(({ user }) => {
//           //           dispatch(setUser({
//           //                email: user.email,
//           //                id: user.uid,
//           //                token: user.accessToken,
//           //           }))
//           //           navigate(CHAT_ROUTE, { replace: true });
//           //      })
//           //      .catch(console.error)
//           console.log(data);
//           reset();
//      }
//      const onError = errors => {
//           console.log(errors);
//      }



//      return (
//           <Container maxWidth='sm'>
//                <Box sx={{
//                     minHeight: '100vh',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     rowGap: '20px'
//                }}>
//                     <Box >
//                          <Typography component='h2' variant='h5'>Войти в аккаунт</Typography>
//                     </Box>
//                     <Box component='form'
//                          noValidate
//                          onSubmit={handleSubmit(onSubmit, onError)}
//                          sx={{
//                               minWidth: '70%',
//                               display: 'flex',
//                               flexDirection: 'column',
//                               rowGap: '10px'
//                          }}>
//                          <Controller
//                               control={control}
//                               name="email"
//                               render={({ field }) => (
//                                    <TextField
//                                         type='email'
//                                         label="Введите адрес электронной почты"
//                                         variant="outlined"
//                                         fullWidth
//                                         required
//                                         {...register('email', {
//                                              required: { value: true, message: 'Обязательное поле'},
//                                              pattern:  { value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu, message: 'Введите корректный адрес'}
//                                         }
//                                         )}
//                                         onChange={field.onChange}
//                                         value={field.value}
//                                         error={!!errors.email}
//                                    />
//                               )}
//                          />
//                          {errors?.email && <div style={{ color: 'red' }}>{errors.email.message}</div>}
//                          <Controller
//                               control={control}
//                               name="password"
//                               render={({ field }) => (
//                                    <TextField
//                                         type='password'
//                                         label="Введите пароль"
//                                         variant="outlined"
//                                         fullWidth
//                                         required
//                                         {...register('password', {
//                                              required: { value: true, message: 'Обязательное поле'},
//                                              minLength: { value: 6, message: 'Пароль короче 6 символов'}
//                                         }
//                                         )}
//                                         onChange={field.onChange}
//                                         value={field.value}
//                                         error={!!errors.password}
//                                    />
//                               )}
//                          />
//                          {errors?.password && <div style={{ color: 'red' }}>{errors.password.message}</div>}
//                          <Button type='submit' variant='contained'>Войти</Button>
//                     </Box>
//                     <Button
//                          variant="text"
//                          size='small'
//                          replace
//                          component={RouterLink}
//                          to={REGISTRATION_ROUTE}
//                     >
//                          Зарегистрироваться
//                     </Button>

//                </Box>
//           </Container>
//      );
// };

// export default Auth;

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