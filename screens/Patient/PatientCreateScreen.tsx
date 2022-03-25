import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, StyleSheet, ColorSchemeName } from 'react-native';

import Colors from '../../constants/Colors';
import tw, { useDeviceContext } from 'twrnc';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, TextInput,  ScrollView } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

import useColorScheme from '../../hooks/useColorScheme';
import { Picker } from '@react-native-picker/picker';
import PickerStyles from '../../styles/picker';
import SeparatorStyles from '../../styles/separator';
import TitleStyles from '../../styles/title';
import ContainerStyles from '../../styles/container';

export default function Home({ navigation }: RootTabScreenProps<'Patient'>) {
  useDeviceContext(tw);
  const colorScheme = useColorScheme();
  const [selectedGender, setSelectedGender] = useState();
  const ScrollViewstyles = StyleSheet.create({
    contentContainer: {
      
      flex: 1,
      alignItems: 'center',

    }
  });
  return (
    <ScrollView contentContainerStyle={ScrollViewstyles.contentContainer}>
      <Text style={TitleStyles.title}>Add Patient</Text>


      <View style={SeparatorStyles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View>
        {/* Fields */}

        {/* Firstname */}
        <TextInput
          placeholder='Enter Firstname'
        />

        {/* Last Nmae */}
        <TextInput
          placeholder='Enter last name'
        />
        {/* drop down select */}
        
        <Picker
          style={PickerStyles.picker}
          selectedValue={selectedGender}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedGender(itemValue)
          }>
          <Picker.Item label="male" value="m" />
          <Picker.Item label="female" value="f" />
        </Picker>




        {/* Submit Button */}
        <Pressable
          onPress={() => navigation.navigate('Patient')}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}>
          <Text style={tw`border-2  border-gray-500 m-5 capitalize text-justify rounded-full py-2 px-10 `}>
            <FontAwesome
              name='archive'
              size={25}
              color={Colors[colorScheme].text}
              style={{ marginRight: 15 }}
            />
            Add Patient
          </Text>

        </Pressable>


      </View>



    </ScrollView>
  );
}


