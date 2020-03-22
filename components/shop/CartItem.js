import React from 'react';
import { 
    View, 
    Text, 
    Image, 
    Button, 
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
 } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const CartItem = props => {
    return <View style={styles.cartItem}> 
        <View style={styles.itemData}>
            <Text style={styles.qty}>{props.quantity} </Text>
            <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={styles.itemData}>
            <Text style={styles.amount}>${props.amount.toFixed(2)}</Text>
            {props.deletable && (
            <TouchableOpacity onPress={props.onRemove} style={styles.delBtn}>
                <Ionicons 
                    name={Platform.os === 'android' ? 'md-trash' : 'ios-trash'} 
                    size={23}
                    color="red"
                />
            </TouchableOpacity>
            )}
        </View>
    </View>
};

const styles = StyleSheet.create({
    cartItem: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    qty: {
        fontFamily: 'sitka-bold',
        fontSize: 16,
        color: '#888'
    },
    title: {
        fontFamily: 'sitka-bold',
        fontSize: 16
    },
    amount: {
        fontFamily: 'sitka-bold',
        fontSize: 16
    },
    delBtn: {
        marginLeft: 20
    }
});

export default CartItem;