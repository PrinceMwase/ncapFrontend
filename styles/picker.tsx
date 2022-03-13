import { StyleSheet } from "react-native";
import tw from 'twrnc';
const PickerStyles = StyleSheet.create({
  
    picker:{
      backgroundColor: 'transparent',
      borderStyle: "solid",
      borderTopWidth:0,
      borderRightWidth:0,
      borderLeftWidth:0,
      borderBottomWidth: 1,
      ...tw`mb-2 py-2`
    }
    
  });

export default PickerStyles