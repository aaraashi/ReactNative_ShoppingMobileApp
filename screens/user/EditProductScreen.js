import React, { useState, useEffect, useCallback } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../../components/UI/HeaderButton';
import * as productsActions from '../../store/actions/products';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const EditProductScreen = props => {
    const prodId = props.navigation.getParam('productId');
    const editedProduct = useSelector(state =>
        state.products.userProducts.find(prod => prod.id === prodId));

    const dispatch = useDispatch();

    const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
    const [imageURL, setImageURL] = useState(editedProduct ? editedProduct.imageURL : '');
    const [description, setDescription] = useState(editedProduct ? editedProduct.description : '');
    const [price, setPrice] = useState('');

    const submitHandler = useCallback(() => {
        if (editedProduct) {
            dispatch(productsActions.updateProduct(prodId, title, description, imageURL));
        } else {
            dispatch(productsActions.createProduct(title, description, imageURL, +price));
        }
        props.navigation.goBack();
    }, [dispatch, prodId, title, description, imageURL, price]
    );

    useEffect(() => {
        props.navigation.setParams({submit:submitHandler});
    }, [submitHandler]);

    return (
        <ScrollView>
        <View style={styles.form}>
        <View style={styles.formControll} >
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)}/>
        </View>
        <View style={styles.formControll} >
            <Text style={styles.label}>Description</Text>
            <TextInput style={styles.input} value={description} onChangeText={text => setDescription(text)}/>
        </View>
        <View style={styles.formControll} >
            <Text style={styles.label}>URL</Text>
            <TextInput style={styles.input} value={imageURL} onChangeText={text => setImageURL(text)}/>
        </View>
        {editedProduct ? null : (
        <View style={styles.formControll} >
            <Text style={styles.label}>Price</Text>
            <TextInput style={styles.input} value={price} onChangeText={text => setPrice(text)}/>
        </View>
        )}
        </View>
        </ScrollView>
    );
};

EditProductScreen.navigationOptions = navData => {
    const submitFunc = navData.navigation.getParam('submit');
    return {
        headerTitle: navData.navigation.getParam('productId')
        ? 'Edit Product'
        : 'Add Product',
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Submit"
              iconName={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
              onPress={submitFunc}
            />
          </HeaderButtons>
          )
    };
};

const styles = StyleSheet.create({
    form: {
        margin: 20
    },
    formControll: {
        width: '100%'
    },
    label: {
        fontSize: 18,
        color: Colors.primary,
        marginVertical: 8,
        fontWeight: 'bold',
        marginBottom: -4
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 4,
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
        marginBottom: 16
    }
});

export default EditProductScreen; 