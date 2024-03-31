import React from 'react';
import {
  ActivityIndicator,
  Image,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {CustomText} from '../index';
import AppColors from '../../utils/AppColors';
import {FontFamily} from '../../utils/Fontfamily';
import styles from './styles';

type IButtonCommonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  containerStyle?: ViewStyle;
  widthbtn: any;
};

type IButtonProps = IButtonCommonProps & {
  isLoading?: boolean;
  loaderColor?: string;
  color?: string;
  size?: number;
  testID?: string;
  activeOpacity?: number;
  backIcon?: boolean;
  count?: number;
};
const Button: React.FC<IButtonProps> = ({
  title,
  onPress,
  disabled = false,
  isLoading = false,
  loaderColor = AppColors.white,
  activeOpacity = 0.7,
  containerStyle = {},
  color = AppColors.white,
  size = 4,
  testID = 'button',
  count,
}) => {
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={activeOpacity}
      style={[styles.container, containerStyle]}>
      {isLoading ? (
        <ActivityIndicator color={loaderColor} size="large" testID="loader" />
      ) : (
        <View style={{flexDirection: 'row'}}>
          <CustomText
            color={color}
            letterSpacing={2}
            size={size}
            font={FontFamily.appFontMedium}>
            {title}
          </CustomText>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

export const CommenButton: React.FC<IButtonProps> = ({
  title,
  onPress,
  disabled = false,
  isLoading = false,
  loaderColor = AppColors.white,
  activeOpacity = 0.7,
  containerStyle = {},
  color = AppColors.white,
  size = 4,
  testID = 'button',
}) => {
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={activeOpacity}
      style={[styles.container2, containerStyle]}>
      {isLoading ? (
        <ActivityIndicator color={loaderColor} size="large" testID="loader" />
      ) : (
        <CustomText
          color={color}
          letterSpacing={2}
          size={size}
          font={FontFamily.appFontMedium}>
          {title}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};
