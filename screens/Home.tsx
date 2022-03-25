import { Image, Box, AspectRatio, Center, Stack, Heading, Text as BaseText, HStack } from 'native-base';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, ScrollView } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {




  return (
    <ScrollView>


      <View>

        <Image
          source={require('../assets/images/report.jpg')}
          alt="Main Image"
          size="xl"
          w="100%"
          resizeMode='cover'
        />
      </View>




      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      {/* card */}
      <Box maxW="100%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
      }} _web={{
        shadow: 2,
        borderWidth: 0
      }} _light={{
        backgroundColor: "gray.50"
      }}>

        <Box>

          <Image w="100%" source={require('../assets/images/vl.jpg')} alt="image" resizeMode='stretch' size="xl" />

          <Center bg="violet.500" _dark={{
            bg: "violet.400"
          }} _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs"
          }} position="absolute" bottom="0" px="3" py="1.5">
            VL Monitoring
          </Center>
        </Box>

        <Stack p="4" space={3}>


          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <BaseText color="coolGray.600" _dark={{
                color: "warmGray.200"
              }} fontWeight="400">
                updated: 6 mins ago
              </BaseText>
            </HStack>
          </HStack>
        </Stack>
      </Box>

      <Box maxW="100%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
      }} _web={{
        shadow: 2,
        borderWidth: 0
      }} _light={{
        backgroundColor: "gray.50"
      }}>

        <Box>

          <Image w="100%" source={require('../assets/images/vl.jpg')} alt="image" resizeMode='stretch' size="xl" />

          <Center bg="violet.500" _dark={{
            bg: "violet.400"
          }} _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs"
          }} position="absolute" bottom="0" px="3" py="1.5">
            Drug Dispensation
          </Center>
        </Box>

        <Stack p="4" space={3}>


          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <BaseText color="coolGray.600" _dark={{
                color: "warmGray.200"
              }} fontWeight="400">
                updated: 10 mins ago
              </BaseText>
            </HStack>
          </HStack>
        </Stack>
      </Box>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
