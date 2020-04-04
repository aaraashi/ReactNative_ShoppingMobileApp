import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return <View style={{...styles.product, ...props.style}}>
        {props.children}
    </View>
};

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0.5, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    }
});

export default Card;