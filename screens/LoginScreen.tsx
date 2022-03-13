import React, { createElement, useEffect, useRef, useState } from "react";

import { FontAwesome } from '@expo/vector-icons';
import { Text, View, Button, TextInput, MyPassword } from '../components/Themed';
import { RootTabScreenProps } from "../types";
import tw, { useDeviceContext } from 'twrnc';
import { ColorSchemeName, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import store from "../store";
import axios, { AxiosResponse } from "axios";

const LoginScreen = ({ navigation }: RootTabScreenProps<'TodayReport'>) => {
    useDeviceContext(tw);
    const dailReports = ["Drug Dispensations", "Viiral Load Monitoring", 'ART dispensation', 'GBV Reports', 'Daily Outcomes']

    let unsubscibe: any

    const colorScheme = useColorScheme();

    type Credentials = {
        username: String;
        password: String
    }
    const userRef = useRef()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')



    function login(data: Credentials) {
        
        console.log(data);
        navigation.navigate('Appointment')

    }


    return (
        <View>
            <View style={tw``}>

                {/* Username */}
                <Text>
                    Enter username {username}
                </Text>

                <TextInput
                    style={{ fontSize: 42, color: 'steelblue' }}
                    placeholder="Username"
                    value={username}
                    onChangeText={(username) => { setUsername(username); }}
                />

                {/* password */}
                <Text>
                    Enter your password {password}
                </Text>
                <TextInput
                    style={{ fontSize: 42, color: 'steelblue' }}
                    value={password}
                    placeholder="Password"
                    onChangeText={(password) => { setPassword(password) }}
                />


                <Pressable
                    onPress={() => login({ username: username, password: password })}

                    style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1,
                    })}>
                    <Text style={tw`border-b   border-blue-100 m-2 capitalize text-justify`} >
                        <FontAwesome
                            name="sign-in"
                            size={25}
                            color={Colors[colorScheme].text}
                            style={{ marginRight: 15 }}
                        />
                        Sign in
                    </Text>
                </Pressable>
            </View>
        </View>

    );
};

export default LoginScreen