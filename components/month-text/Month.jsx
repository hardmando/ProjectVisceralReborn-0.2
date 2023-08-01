import { MonthWrapper } from "./styledMonth";
import { MonthText } from "./styledMonth";
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from "expo-linear-gradient";
import { View, Text } from 'react-native'
import DropShadow from "react-native-drop-shadow";

const Month = () => {
    var month = new Date().getMonth() + 1;
    var monthName;

    if(month == 1)  monthName = "January"
      else if(month == 2) monthName = "February" 
      else if(month == 3) monthName = "March"
      else if(month == 4) monthName = "April"
      else if(month == 5) monthName = "May"
      else if(month == 6) monthName = "June"
      else if(month == 7) monthName = "July"
      else if(month == 8) monthName = "August"
      else if(month == 9) monthName = "September"
      else if(month == 10) monthName = "October"
      else if(month == 11) monthName = "November"
      else if(month == 12) monthName = "December"

    return(
    <MonthWrapper>
        <DropShadow
            style={{
                shadowColor: "#0A220F",
                shadowOffset: {
                    width: -2,
                    height: 0,
                },
                shadowOpacity: 1,
                shadowRadius: 0.2,
            }}
        >
            <MonthText>
                {monthName}
            </MonthText>
        </DropShadow>
    </MonthWrapper>
    )
}
export default Month;