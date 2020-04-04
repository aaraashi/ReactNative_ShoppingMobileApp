import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

import Colors from '../../constants/Colors';

const DefaultButton = props => {
    const content = (
        <View style={styles.button} color={props.color}>
        <Text style={styles.text}>{props.title}</Text>
        </View>
    )
    return (
        <TouchableOpacity onPress={props.onPress}>
            {content}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        borderRadius: 6,
        padding: 8
    },
    text: {
        fontSize: 15,
        color: 'white'
    }
});

export default DefaultButton;
