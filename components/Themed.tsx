/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import React from 'react';
import { Text as DefaultText, View as DefaultView, Button as DefaultButton, TextInput as DeafultTextInput, createElement, DrawerLayoutAndroid as DefaultDrawerLayoutAndroid  } from 'react-native';
import tw, { useDeviceContext } from 'twrnc';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

class DefaultPassword extends React.Component<any, any> {
  

  
  render() {
    
    return createElement('input', {
      type: 'password',
      onInput: onchange,
      
    })
  }
}

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type ButtonProps = ThemeProps & DefaultButton['props'];
export type TextInputProps = ThemeProps & DeafultTextInput['props'];
export type PasswordProps = ThemeProps & DefaultPassword['props']
export type DrawerProps = ThemeProps & DefaultDrawerLayoutAndroid['props']

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
export function Button(props: ButtonProps) {
  const { lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }]} {...otherProps} />;
}
export function TextInput(props: TextInputProps) {
  const { lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  
  return <DeafultTextInput style={[{ backgroundColor }, tw`pt-1 border-gray-500 border-b-2 my-2 py-1 w-1/2`]  } {...otherProps} />;
}

export function MyPassword(props: TextInputProps) {
  const { lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  return <DefaultPassword style={[{ backgroundColor }]} {...otherProps} />;
}

export function DrawerAndroid(props: DrawerProps){
  const { lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultDrawerLayoutAndroid style = {[{backgroundColor}]} {...otherProps} />
}