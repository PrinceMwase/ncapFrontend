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
import { connect } from 'react-redux';
import { user_login} from '../actions/login'
import { bindActionCreators } from 'redux';
import ContainerStyles from "../styles/container";
import TitleStyles from "../styles/title";
import SeparatorStyles from "../styles/separator";
import TodayReportsScreen from "./TodayReport";

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
        
        axios.post('api-token-auth/', data).then( (value: AxiosResponse)=>{
            navigation.navigate('TodayReport')
            
        } ).catch( (reason)=>{
            console.log( "failed Because " + reason );
            
        } )

    }


    return (
        <View style={ContainerStyles.container}>
                <Text style={TitleStyles.title}>Sign In</Text>            

                <View style={SeparatorStyles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />


                {/* Username */}
                

                <TextInput
                   
                    placeholder="Username"
                    value={username}
                    onChangeText={(username) => { setUsername(username); }}
                />

                {/* password */}
               
                <TextInput
                    
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

    );
};

export default LoginScreen