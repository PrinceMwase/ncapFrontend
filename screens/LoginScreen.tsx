import React, { createElement, useEffect, useRef, useState } from "react";

import { FontAwesome } from '@expo/vector-icons';
import { Text, View, TextInput, MyPassword, ScrollView } from '../components/Themed';
import { RootTabScreenProps } from "../types";
import tw, { useDeviceContext } from 'twrnc';
import { ColorSchemeName, Pressable, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import axios, { AxiosResponse } from "axios";
import { connect } from 'react-redux';
import { user_login } from '../actions/login'
import { bindActionCreators } from 'redux';
import ContainerStyles from "../styles/container";
import TitleStyles from "../styles/title";
import SeparatorStyles from "../styles/separator";
import TodayReportsScreen from "./TodayReport";
import { Button, Input } from "native-base";

const LoginScreen = ({ navigation }: RootTabScreenProps<'TodayReport'>) => {
    useDeviceContext(tw);
    const dailReports = ["Drug Dispensations", "Viiral Load Monitoring", 'ART dispensation', 'GBV Reports', 'Daily Outcomes']
    const [show, setShow] = React.useState(false);

    const handleClick = () => setShow(!show);
    let unsubscibe: any

    const ScrollViewstyles = StyleSheet.create({
        contentContainer: {

            flex: 1,
            alignItems: 'center',

        }
    });

    const colorScheme = useColorScheme();

    // type Credentials = {
    //     username: String;
    //     password: String
    // }
    const userRef = useRef()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const LoginButton = () => {
        return <Button shadow={2} onPress={() => console.log("hello world")}>
            Sign In
        </Button>;
    };
    function login() {

        console.log('login in');
        navigation.navigate('TodayReport')
        // axios.post('api-token-auth/', data).then( (value: AxiosResponse)=>{
        //     navigation.navigate('TodayReport')

        // } ).catch( (reason)=>{


        //     console.log( "failed Because " + reason );

        // } )

    }


    return (
        <ScrollView >
            <Text style={TitleStyles.title}>Sign In</Text>

           


         

            <Input variant="underlined" placeholder="username" />

            <Input variant="underlined" type={show ? "text" : "password"}  py="0" InputRightElement={<Button size="xs" rounded="none" w="1/6" h="full" onPress={handleClick}>
                {show ? "Hide" : "Show"}
            </Button>} placeholder="Password" />
            <Pressable
                    onPress={() => login()}

                    style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1,
                    })}>
                    <Text style={tw`border-2  border-gray-500 m-5 capitalize text-justify rounded-full py-2 px-10 `} >
                        <FontAwesome
                            name="sign-in"
                            size={25}
                            color={Colors[colorScheme].text}
                            style={{ marginRight: 15 }}
                        />
                        Sign in
                    </Text>
                </Pressable>
           
        </ScrollView>

    );
};

export default LoginScreen