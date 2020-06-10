import { TouchableOpacity, Text} from "react-native";
import React from "react";

const ButtonText = props =>{
    return(<TouchableOpacity onPress={props.onPress} style={props.style}>
        <Text style={props.textStyle}>
            {props.Text}
        </Text>
    </TouchableOpacity>)
}
export default ButtonText;