import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text, TextInput,
    View,
} from 'react-native';

export default class Counter extends Component {
    render() {
        return (
            <View>
                <Button
                    title="Up"
                    onPress={this.props.increment}/>
                <Text>
                    Increment by:
                </Text>
                <TextInput
                    onChangeText={(text) => this.props.changeIncrementationNumber({text})}/>
                <Text
                    style={styles.counter}
                    onPress={this.props.reset}>
                    {this.props.count}
                </Text>
                <Text>
                    Decrement by:
                </Text>
                <TextInput
                    onChangeText={(text) => this.props.changeDecrementationNumber({text})}/>
                <Button
                    title="Down"
                    onPress={this.props.decrement}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    counter: {
        padding: 30,
        alignSelf: 'center',
        fontSize: 26,
        fontWeight: 'bold',
    },
});
