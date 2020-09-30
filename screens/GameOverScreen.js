import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';


const GameOverScreen = props => {
    return (
        <View style={styles.container}>
            <Text>The Game Is Over!!</Text>
            <Text>Number of rounds is {props.roundNum}</Text>
            <Text>Number was {props.userNum}</Text>
            <Button  title = 'New Game' onPress = {props.onRestart}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});



export default GameOverScreen;