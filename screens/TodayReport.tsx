import React from "react";

import { FontAwesome } from '@expo/vector-icons';
import { Text, View, Button } from '../components/Themed';
import { RootTabScreenProps } from "../types";
import tw, { useDeviceContext } from 'twrnc';
import { ColorSchemeName, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

const TodayReportsScreen = ({ navigation }: RootTabScreenProps<'TodayReport'>) => {
  useDeviceContext(tw);
  const dailReports = ["Add Patient", "Viiral Load Monitoring", 'ART dispensation', 'GBV Reports', 'Daily Outcomes']

  const getDespensation = () => {

  };
  const colorScheme = useColorScheme();
  return (
    <View>
      <View style={tw``}>
        {dailReports.map((item, index) => (
          <Pressable
            key={index.toString()}
            onPress={() => navigation.navigate('TodayReport')}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <Text style={tw`border-b   border-blue-100 m-2 capitalize text-justify`} >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
              {item}
            </Text>

          </Pressable>

        ))}




      </View>







    </View>

  );
};

export default TodayReportsScreen