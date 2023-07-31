import {StyledControlBarWrapper } from './styledControlBar';
import { useState } from 'react'
import ControlButton from '../elements/control-button/ControlButton';

const ControlBar = ({activeTab,  setActiveTab}) => {

    return (
        <StyledControlBarWrapper>
            <ControlButton
                active={activeTab === 'settings' ? true : false}
                title="Settings"
                tabName='settings'
                setActiveTab={setActiveTab}
                icon='setting'
            />
            <ControlButton
                active={activeTab === 'home' ? true : false}
                title="Home"
                tabName='home'
                setActiveTab={setActiveTab}
                icon='home'
            />
            <ControlButton
                active={activeTab === 'profile' ? true : false}
                title="Profile"
                tabName='profile'
                setActiveTab={setActiveTab}
                icon='user'
            />
        </StyledControlBarWrapper>
    );
}
export default ControlBar;