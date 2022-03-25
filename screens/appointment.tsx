import React, { useState } from "react";
import { Button } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { Text, View, ScrollView, TextInput } from '../components/Themed';
import { RootTabScreenProps } from "../types";
import tw, { useDeviceContext } from 'twrnc';
import { ColorSchemeName, Pressable, Platform, createElement } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import PickerStyles from "../styles/picker";
import ContainerStyles from "../styles/container";
import LabelStyles from "../styles/label";

import Input from "../components/ui/Input";
import MyDatePicker from "../components/ui/datepicker";
import Select, { SelectOption } from "../components/ui/select";






const AppointmentScreen = ({ navigation }: RootTabScreenProps<'Appointment'>) => {
    useDeviceContext(tw);

    const supportGroups: SelectOption[] = [
        {label: 'mz1', value:"12"},
        {label: "msds", value: "asdas"},
        {label: "ntchisi12", value: "nt2"}
    ]

    const sites : SelectOption[] = [
        {label: 'mz1s', value:"1w2"},
        {label: "msdssd", value: "wasdas"},
        {label: "ntchisi", value: "cnt2"}
    ]


    const [selectedLanguage, setSelectedLanguage] = useState();
    const [date, setDate] = useState(new Date())
    const colorScheme = useColorScheme();
    
    
    return (

        <ScrollView style={[ tw`divide-y-10 mb-2`]}>
            {/* Support Group */}
                <Select
                    label="Support Group"
                    data={ supportGroups }
                />
            {/* Site */}
            <Select
                    label="Sites"
                    data={ sites }
            />
            {/* ART NUMBER */}
                <Input name="art" placeholder="ART Number"></Input>
            {/* File Number */}
                <Input name="file_number" placeholder="File Number"></Input>
            {/* CPT */}
                <Input name="cpt" placeholder="CPT"></Input>
            {/* Date Initiated */}
                <MyDatePicker  name="Date initiated"/>
            {/* Next Appointment */}
                <MyDatePicker  name="Next Appointment"/>
            {/* Visit Date */}
                <MyDatePicker  name="Visit Date"/>
            

            <MyDatePicker  name="Viral load"/>

            <Button> Submit</Button>
        </ScrollView>

    );
};

export default AppointmentScreen