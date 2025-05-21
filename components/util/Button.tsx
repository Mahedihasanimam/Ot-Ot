import tw from '@/assets/lib/tailwind';
import React from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
    label: string;
    onPress: (event: GestureResponderEvent) => void;
    buttonStyle?: string; // Tailwind classes
    textStyle?: string;

}

const Button: React.FC<ButtonProps> = ({ label, onPress, buttonStyle = '', textStyle = '' }) => {
    return (
        <TouchableOpacity style={tw`${buttonStyle}`} onPress={onPress}>
            <Text style={tw`${textStyle}`}>{label}</Text>
        </TouchableOpacity>
    );
};

export default Button;
