import React, { useState } from "react";

import { FontAwesome } from '@expo/vector-icons';
import { Text, View, Button, TextInput } from '../components/Themed';
import { RootTabScreenProps } from "../types";
import tw, { useDeviceContext } from 'twrnc';
import { ColorSchemeName, Pressable, Platform, createElement } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import PickerStyles from "../styles/picker";
import ContainerStyles from "../styles/container";
import LabelStyles from "../styles/label";


if (Platform.OS == 'web') {
    const date = createElement('input', {
        type: 'datetime',
        onInput: onchange,
    })
}

class MyDatePicker extends React.Component<any, any> {
    render() {
        return createElement('input', {
            type: 'date',
            onInput: onchange,
        })
    }
}

const AppointmentScreen = ({ navigation }: RootTabScreenProps<'Appointment'>) => {
    useDeviceContext(tw);

    const [selectedLanguage, setSelectedLanguage] = useState();
    const [date, setDate] = useState(new Date())
    const colorScheme = useColorScheme();


    return (

        <View style={[ContainerStyles.container, tw `divide-y-10`]}>


            {/* Add Patient Clinic Visit Details */}

            {/* general visit */}
            <View >
                {/* support Group */}
                <Text
                    style={LabelStyles.label}
                >
                    Support Group
                </Text>
                <Picker
                    style={PickerStyles.picker}
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>

                {/* site */}
                <Text
                    style={LabelStyles.label}
                >
                    Site
                </Text>
                <Picker
                style={PickerStyles.picker}
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>

                {/* ART number */}

                
                <TextInput
                    placeholder="ART #"
                />

                {/* File Number */}
                <TextInput
                    placeholder="File #"
                />

                {/* CPT */}
                <TextInput
                    placeholder="CPT"
                />

                {/* Date Initiated */}
                <Text
                    style={LabelStyles.label}
                >Date initiated</Text>
                <MyDatePicker></MyDatePicker>

                {/* Next Appointment */}
                <Text
                    style={LabelStyles.label}
                >Next Appointmebt</Text>
                <MyDatePicker></MyDatePicker>

                {/* visit date */}


                {/* Patients ART Dispensation */}

            </View>

            {/* art Dispensation */}
            <View >
                <Text style={tw`pt-6 font-large text-center`}>
                    ART Dispensation
                </Text>

                {/* Weight */}
                <TextInput

                    placeholder="weight"
                />

                {/* height */}
                <TextInput

                    placeholder="height"
                />
                {/* blood_pressure */}
                <TextInput

                    placeholder="blood_pressure"
                />
                {/* side_effect */}
                <TextInput

                    placeholder="side_effect"
                />  {/* tb_status */}
                <TextInput

                    placeholder="tb_status"
                />  {/* dose_missed */}
                <TextInput

                    placeholder="dose_missed"
                />  {/* pill count */}
                <TextInput

                    placeholder="pill count"
                />  {/* Art Given */}
                <TextInput

                    placeholder="Art Given"
                />
                {/* number of pills */}
                <TextInput

                    placeholder="number of pills"
                />
                {/* number of pyridoxine */}
                <TextInput

                    placeholder="number of pyridoxine"
                />

                {/* inh */}
                <TextInput

                    placeholder="inh"
                />
                {/* blood_pressure drug */}
                <TextInput

                    placeholder="blood_pressure drug"
                />
                {/* number of tabs */}
                <TextInput

                    placeholder="number of tabs"
                />

                {/* fp method */}
                <TextInput

                    placeholder="fp method"
                />

                {/* number of condoms */}
                <TextInput

                    placeholder="number of condoms"
                />


            </View>
            {/* Viral load */}
            <View>
                <Text style={tw`pt-6 font-large text-center`}>
                    Viral Load
                </Text>


                {/* regimen */}
                <TextInput

                    placeholder="regimen"
                />

                {/* result */}
                <TextInput

                    placeholder="result"
                />

                {/* Viral load date */}
                <Text
                    style={LabelStyles.label}
                >
                    Viral load date
                </Text>
                <MyDatePicker></MyDatePicker>

                {/* remark */}
                <Text
                    style={LabelStyles.label}
                >
                    remark
                </Text>
                <TextInput

                    placeholder="remark"
                />

            </View>
        </View>

    );
};

export default AppointmentScreen