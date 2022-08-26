import React from 'react';
import DialogsList from '../DialogList/DialogsList';
import SidebarHeader from '../SidebarHeader.jsx/SidebarHeader';
import './Sidebar.scss'

const Sidebar = () => {
     return (
          <aside className='sidebar'>
               <SidebarHeader />
               <div className='sidebar__dialogs dialogs'>
                    <div className='dialogs__top'>
                         <h3 className='dialogs__title'>Chats</h3>
                    </div>
                    <DialogsList/>
               </div>
          </aside>
     );
};

export default Sidebar;