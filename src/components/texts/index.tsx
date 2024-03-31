import React from 'react';
import {Pressable, StyleSheet, Text, ViewStyle} from 'react-native';
import AppColors from '../../utils/AppColors';
import {width} from '../../utils/index';
import {FontFamily} from '../../utils/Fontfamily';

interface Props {
  children: React.ReactNode;
  color?: string;
  textStyles?: object;
  fontFam?: string;
  font?: string;
  size?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  onPress?(): void;
  center?: boolean;
  italic?: boolean;
  justify?: boolean;
  right?: boolean;
  left?: boolean;
  underLine?: boolean;
  fontWeight?: string;
  letterSpacing?: number;
  lineHeight?: number;
  numberOfLines?: number | null;
  style?: ViewStyle;
  testID?: string;
}
export const H1 = ({
  children = '?',
  center = false,
  italic = false,
  color = AppColors.black,
  onPress = undefined,
  textStyles,
  fontFam = FontFamily.appFontRegular,
  size = 8,
  textAlign = 'auto',
}: Props) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      fontStyle: italic ? 'italic' : 'normal',
      alignSelf: center ? 'center' : 'auto',
      fontFamily: fontFam,
      textAlign: textAlign,
    },
  });
  return (
    <Pressable disabled={typeof onPress === 'undefined'} onPress={onPress}>
      <Text style={[styles.text, textStyles ?? {}]} testID={'heading'}>
        {children}
      </Text>
    </Pressable>
  );
};

export const CustomText = ({
  children = '?',
  size = 3.3,
  fontWeight = 'normal',
  letterSpacing = 0,
  lineHeight = width(5),
  underLine,
  center,
  justify,
  right,
  italic = false,
  color = AppColors.black,
  onPress = undefined,
  textStyles,
  numberOfLines = null,
  font = FontFamily.appFontRegular,
  testID,
}: Props) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      lineHeight: lineHeight,
      letterSpacing: letterSpacing,
      color: color,
      fontStyle: italic ? 'italic' : 'normal',
      textDecorationLine: underLine ? 'underline' : 'none',
      textAlign: center
        ? 'center'
        : right
        ? 'right'
        : justify
        ? 'justify'
        : 'left',
      fontFamily: fontWeight === 'bold' ? FontFamily.appFontSemiBold : font,
    },
  });
  return (
    <Pressable
      disabled={typeof onPress === 'undefined'}
      onPress={onPress}
      testID={testID}>
      <Text
        testID={'customText'}
        style={[styles.text, textStyles ?? {}]}
        numberOfLines={numberOfLines !== null ? numberOfLines : undefined}>
        {children}
      </Text>
    </Pressable>
  );
};
