import React from 'react'
import { Text, View, Button } from 'react-native'

export default function Landing() {
    return (
        <View style = {{flex: 1, justifyContent: 'center'}}>
            <Button
            title="Register"
            onPress={() => navigator.navigate("Register")}
            />

            <Button
            title="Login"
            onPress={() => navigator.navigate("Login")}
            />
        </View>
    )
}
