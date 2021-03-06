import React from 'react';
import { ScrollView, View, Text, Image, Button, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cart';
import DefaultButton from '../../components/UI/DefaultButton';

const ProductDetailScreen = props => {
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(
        state => state.products.availableProducts.
        find(prod => prod.id == productId));
    const dispatch = useDispatch();

    return (
    <ScrollView>
        <Image style={styles.image} source={{uri: selectedProduct.imageURL}} />
        <View style={styles.actions}>
        <DefaultButton color={Colors.primary} title="Add to Cart" onPress={()=>{
            dispatch(cartActions.addToCart(selectedProduct));
        }}/>
        </View>
        <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
        <Text style={styles.desc}>{selectedProduct.description}</Text>
    </ScrollView>
    );
};

ProductDetailScreen.navigationOptions = navData => {
    return{
        headerTitle: navData.navigation.getParam('productTitle')
    };
};

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 300
    },
    actions: {
        marginTop: 30,
        alignItems: 'center'
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: 'sitka-bold'
    },
    desc: {
        fontFamily: 'sitka',
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 10
    }
});

export default ProductDetailScreen;