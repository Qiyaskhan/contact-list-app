import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const User = () => {
    return (
        <View style={styles.container}>
            <View style={styles.welcomeView}>
                <Text style={styles.welcomeText}>Welcome to user screen</Text>
            </View>
        </View>
    );
}

export default User


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    welcomeView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333',
        paddingVertical: 50,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
});
