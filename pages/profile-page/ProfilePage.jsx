import { ProfilePageWrapper } from "./styledProfilePage";
import { Text } from "react-native";
import  Icon  from "react-native-vector-icons/Ionicons";
import DropShadow from "react-native-drop-shadow";

const ProfilePage = ({active}) => {
    return(
        <ProfilePageWrapper
        active={active}
        >
            <DropShadow
                style={{
                    shadowColor: "#0A220F",
                    shadowOffset: {
                        width: -2,
                        height: 0,
                    },
                    shadowOpacity: 1,
                    shadowRadius: 0.1,
                }}
            >
                <Text
                    style={{
                        fontSize: 30,
                        color: '#0A220F'
                    }}
                >Work in progress</Text>
            </DropShadow>
            <Icon 
                name='cog'
                style={{
                    fontSize: 80,
                    color: '#0A220F'
                }}
            />
        </ProfilePageWrapper>
    )
}
export default ProfilePage;