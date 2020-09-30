import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors'


const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>
                {props.title}
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        paddingTop: 10
    },
    headerText: {
        color: 'black',
        fontSize: 18
    }
});



export default Header;