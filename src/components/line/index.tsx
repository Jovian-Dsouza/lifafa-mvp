import {DimensionValue} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {height, width} from '../../utils/index';
import AppColors from '../../utils/AppColors';

interface Props {
  color?: string;
  customWidth?: DimensionValue;
  strokWidth?: number;
  containerStyles?: ViewStyle;
}
export const HorizontalLine = ({
  color = AppColors.black,
  customWidth = '100%',
  strokWidth = 1,
  containerStyles = {},
}: Props) => {
  const styles = StyleSheet.create({
    line: {
      height: strokWidth,
      backgroundColor: color,
      width: customWidth,
      borderRadius: width(10),
      ...containerStyles,
    },
  });
  return <View style={styles.line} testID="horizontal-line" />;
};

export const VerticalLine = ({
  color = AppColors.lightGray,
  customHeight = height(5),
  strokWidth = 1,
  containerStyles = {},
}) => {
  const styles = StyleSheet.create({
    line: {
      alignSelf: 'center',
      width: strokWidth,
      height: customHeight,
      backgroundColor: color,
      ...containerStyles,
    },
  });
  return <View style={styles.line} testID="vertical-line" />;
};
