import  Icon  from "react-native-vector-icons/Ionicons";
import { SettingsPageWrapper } from "./styledSettingPage";
import { Text } from "react-native";

const SettingsPage = ({active}) => {
    return(
        <SettingsPageWrapper active={active}>
            <Text
                style={{
                    fontSize: 30
                }}
            >Work in progress</Text>
            <Icon 
                name='cog'
                style={{
                    fontSize: 80
                }}
            />
        </SettingsPageWrapper>
    )
} 
export default SettingsPage;