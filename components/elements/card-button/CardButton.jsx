import DropShadow from "react-native-drop-shadow";
import { CardButtonWrapper } from "./styledCardButton";
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/Ionicons'

const CardButton = ({setModalVisible}) => {
    return(
           
                    <DropShadow
                        style={{
                        shadowColor: "#0A220F",
                        shadowOffset: {
                            width: -1,
                            height: 0,
                        },
                        shadowOpacity: 1,
                        shadowRadius: 0.2,
                        }}
                    >
                        <CardButtonWrapper
                            onPress={() => setModalVisible(true)}
                        > 
    
                                <Icon
                                    name="add"
                                    size={80}
                                    color= {"#0A220F"}
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                    }}
                                />
                        </CardButtonWrapper>
                    </DropShadow>
    )
}
export default CardButton;