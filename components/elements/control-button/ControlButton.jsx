import { LinearGradient } from "expo-linear-gradient";
import { ControlButtonWrapper, ControlButtonPressable } from "./styledControlButton";
import DropShadow from "react-native-drop-shadow";
import Icon from 'react-native-vector-icons/AntDesign'

const ControlButton = ({active, tabName, setActiveTab, icon}) => {
    return(
        <ControlButtonWrapper
            active={active}
        >
            <ControlButtonPressable
                onPress={() => setActiveTab(tabName)}
            >
                <Icon
                    name={icon}
                    size={50} 
                    color= { active ? "#0A220F" : "#0A220F"}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center'
                    }}
                />
            </ControlButtonPressable>
        </ControlButtonWrapper>
    )
}
export default ControlButton;