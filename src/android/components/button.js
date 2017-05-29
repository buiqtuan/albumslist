import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default class Button extends React.Component {
    render() {
        return (
            <TouchableOpacity>
                <Text> Click me!!! </Text>
            </TouchableOpacity>
        );
    }
}
