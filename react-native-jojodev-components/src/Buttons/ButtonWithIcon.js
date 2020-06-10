import React from 'react';
import { TouchableOpacity, Image } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5';


const ButtonWithIcon = props => {
    return (
        <TouchableOpacity onPress={props.onPress} style={props.style}>
            <Icon name={props.icon} style={props.iconStyle}/>
        </TouchableOpacity>
    )
};
export default ButtonWithIcon;