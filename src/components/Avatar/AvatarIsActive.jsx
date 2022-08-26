import React from 'react';
import { Avatar, Badge } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const AvatarIsActive = ({ src }) => {
     return (
          <Badge
               overlap="circular"
               anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
               badgeContent={<TaskAltIcon fontSize='small' color='success'/>}
               sx={{
                    alignItems: 'start',
               }}
          >    
               <Avatar sx={{
                    width: '45px',
                    height: '45px',
               }}
                    alt={`avatar`}
                    src={src} />
          </Badge>
     );
};

export default AvatarIsActive;