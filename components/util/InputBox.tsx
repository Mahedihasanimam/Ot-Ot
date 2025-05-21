import React, { useState } from 'react';
import {
    KeyboardTypeOptions,
    Platform,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import tw from 'twrnc';

interface InputBoxProps {
    placeholder?: string;
    type?: 'default' | 'email' | 'number' | 'phone' | 'password';
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    textStyle?: string;
    containerStyle?: string;
    onChangeText?: (text: string) => void;
    value?: string;
    toggleVisibilityIcon?: {
        visible: React.ReactNode;
        hidden: React.ReactNode;
    };
}

const InputBox: React.FC<InputBoxProps> = ({
    placeholder = '',
    type = 'default',
    prefixIcon,
    suffixIcon,
    textStyle = '',
    containerStyle = '',
    onChangeText,
    value = '', // Default value to prevent undefined
    toggleVisibilityIcon,
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const keyboardType: KeyboardTypeOptions =
        type === 'email' ? 'email-address' :
            type === 'number' ? (Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'numeric') :
                type === 'phone' ? 'phone-pad' :
                    'default';

    const secureTextEntry = type === 'password' && !isPasswordVisible;

    const handleToggleVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    return (
        <View style={tw`flex-row items-center border rounded px-3 ${containerStyle}`}>
            {prefixIcon && <View style={tw`mr-2`}>{prefixIcon}</View>}

            <TextInput
                style={tw`flex-1 py-2 ${textStyle}`}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                onChangeText={onChangeText} // Ensure this is passed from parent
                value={value} // Controlled by parent
                placeholderTextColor="#888"
                editable={true}
            />

            {type === 'password' && toggleVisibilityIcon && (
                <TouchableOpacity
                    onPress={handleToggleVisibility}
                    style={tw`ml-2`}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    {isPasswordVisible ? toggleVisibilityIcon.visible : toggleVisibilityIcon.hidden}
                </TouchableOpacity>
            )}

            {suffixIcon && !(type === 'password' && toggleVisibilityIcon) && (
                <View style={tw`ml-2`}>{suffixIcon}</View>
            )}
        </View>
    );
};

export default InputBox;