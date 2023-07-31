import { ProfilePageWrapper } from "./styledProfilePage";
import { Text } from "react-native";
import  Icon  from "react-native-vector-icons/Ionicons";

const ProfilePage = ({active}) => {
    return(
        <ProfilePageWrapper
        active={active}
        >
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
        </ProfilePageWrapper>
    )
}
export default ProfilePage;