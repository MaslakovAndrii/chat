import React from 'react';
import { useSelector } from 'react-redux'
import AvatarIsActive from '../Avatar/AvatarIsActive';
import Search from '../Search/Search';
import './SidebarHeader.scss'

const SidebarHeader = () => {
     const userName = useSelector(state => state.userReducer.userName)

     return (
          <div className='header-sidebar'>
               <div className='header-sidebar__top'>
                    <AvatarIsActive />
                    <h2 className='header-sidebar__full-name'>{userName} </h2>
               </div>
               <Search />
          </div>
     );
};

export default SidebarHeader;