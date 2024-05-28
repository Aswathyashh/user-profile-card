import React from 'react';
import avatar from '../assets/images.png';

import '../appStyles.css';

const UserCard = ({ user }) => {
    return (
      <div className='main-layout'>
        <div className='user-profile'>
          <div className='gradient'></div>
          <div className='profile-down'>
            <img src={avatar} alt={`${user?.name}'s avatar`} className="user-avatar" />
            <div className='profile-title'>{user?.name}</div>
            <div className='profile-description'>{user?.biography}</div>
          </div>
        </div>
      </div>
    );
  };

export default UserCard;

