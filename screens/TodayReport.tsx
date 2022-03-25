import React from "react";

import { FontAwesome } from '@expo/vector-icons';
import { Text, View, Button, ScrollView } from '../components/Themed';
import { RootTabScreenProps } from "../types";
import tw, { useDeviceContext } from 'twrnc';
import { ColorSchemeName, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { Badge, VStack } from "native-base";
const TodayReportsScreen = ({ navigation }: RootTabScreenProps<'TodayReport'>) => {
  useDeviceContext(tw);
  const dailReports = ["Patients",  'ART dispensation records',  'VL Records']

  const getDespensation = () => {

  };
  const colorScheme = useColorScheme();
  return (
    <ScrollView>
      <View style={tw``}>
        {dailReports.map((item, index) => (
          <VStack>
              <Badge // bg="red.400"
                 rounded="full" mb={-4}  zIndex={1} variant="solid" alignSelf="flex-end" _text={{
                  fontSize: 12
                }}>
                {index}
              </Badge>
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
          </VStack>
        ))}




      </View>







    </ScrollView>

  );
};

export default TodayReportsScreen