import {StyledControlBarWrapper } from './styledControlBar';
import ControlButton from '../elements/control-button/ControlButton';
import DropShadow from 'react-native-drop-shadow';

const ControlBar = ({activeTab,  setActiveTab}) => {

    return (
        <DropShadow
        style={{
            shadowColor: "#0A220F",
            shadowOffset: {
                width: 0,
                height: -0.5,
            },
            shadowOpacity: 1,
            shadowRadius: 0.2,
            bottom: '-1%'
        }}
        >
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
        </DropShadow>
    );
}
export default ControlBar;