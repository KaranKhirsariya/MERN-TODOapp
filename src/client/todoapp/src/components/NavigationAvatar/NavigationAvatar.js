import React from 'react';
import './NavigationAvatar.css';
import Gravatar from 'react-gravatar'

function NavigationAvatar(props) {
    return (
        <div className="UserInfo">
            <Gravatar email={props.email} size={30} rating="pg" default="monsterid" className="UserInfo-image" />
            <div className="UserInfo-dropdown-arrow"></div>
            <div className="UserInfo-dropdown-menu"></div>
        </div>
    )
}
export default NavigationAvatar; 