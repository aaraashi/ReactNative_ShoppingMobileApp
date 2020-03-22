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

import Colors from '../../constants/Colors';

const ProductItem = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21){
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.product}>
        <TouchableCmp onPress={props.onViewDetail} useForeground>
        <View>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: props.image}}/>
        </View>
        <View style={styles.details}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>${props.price.toFixed(2)}</Text>
        </View>
        <View style={styles.actions}>
            <Button color={Colors.primary} title="View Details" onPress={props.onViewDetail}/>
            <Button color={Colors.primary} title="To Cart" onPress={props.onAddToCart}/>
        </View>
        </View>
      </TouchableCmp>
      </View>
    );
};

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0.5, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 310,
        margin: 20,
        overflow: 'hidden'
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    details: {
        alignItems: 'center'
    },
    title: {
        fontFamily: 'sitka-bold',
        fontSize: 18,
        marginVertical: 4
    },
    price: {
        fontFamily: 'sitka',
        fontSize: 14,
        color: '#888',
        paddingLeft: 10
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default ProductItem;