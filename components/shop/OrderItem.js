import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';

import CartItem from './CartItem';
import Colors from '../../constants/Colors';

const OrderItem = props => {
    const [showDetails, setShowDetails] = useState(false);
  
    return (
      <View style={styles.orderItem}>
        <View style={styles.summary}>
          <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
          <Text style={styles.date}>{props.date}</Text>
        </View>
        <Button
          color={Colors.primary}
          title={showDetails ? 'Hide Details' : 'Show Details'}
          onPress={() => {
            setShowDetails(prevState => !prevState);
          }}
        />
        {showDetails && (
          <View style={styles.details}>
            {props.items.map(cartItem => (
              <CartItem
                key={cartItem.productId}
                title={cartItem.productTitle}
                quantity={cartItem.quantity}
                amount={cartItem.sum}
              />
            ))}
          </View>
        )}
      </View>
    );
  };

const styles = StyleSheet.create({
    orderItem: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0.5, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 310,
        margin: 20,
        alignItems: 'center'
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10
    },
    totalAmount: {
        fontSize: 16,
        fontFamily: 'sitka',
        padding: 10
    },
    date: {
        fontSize: 14,
        fontFamily: 'sitka',
        color: '#888',
        padding: 10
    },
    details: {
        width: '100%'
    }
});

export default OrderItem;