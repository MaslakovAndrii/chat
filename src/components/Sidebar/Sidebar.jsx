import React, { useEffect, useState } from 'react';
import DialogsList from '../DialogList/DialogsList';
import SidebarHeader from '../SidebarHeader.jsx/SidebarHeader';
import './Sidebar.scss'

const Sidebar = () => {
     const [isActive, setIsActive] = useState('')
     const [windowWidth, setWindowWidth] = useState(window.innerWidth);

     function resizeWindow() {
          setWindowWidth(window.innerWidth);
     };

     useEffect(() => {
          resizeWindow();
          window.addEventListener("resize", resizeWindow);
          return () => window.removeEventListener("resize", resizeWindow);
     }, []);



     function isActiveSidebar() {
          const sidebar = document.querySelector('.sidebar');
          const sidebarOpen = sidebar?.className.includes('active');

          if (!sidebarOpen && window.innerWidth < 768) {
               setIsActive('active')
          }
     }

     useEffect(() => {
          isActiveSidebar()
     }, [windowWidth])


     return (
          <aside className={`sidebar ${isActive}`}>
               <SidebarHeader />
               <div className='sidebar__dialogs dialogs'>
                    <div className='dialogs__top'>
                         <h3 className='dialogs__title'>Chats</h3>
                    </div>
                    <DialogsList />
               </div>
          </aside>
     );
};

export default Sidebar;