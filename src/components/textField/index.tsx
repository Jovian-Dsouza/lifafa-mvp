import React, {forwardRef} from 'react';
import {Controller} from 'react-hook-form';
import {TextInput, View, ViewStyle} from 'react-native';
import {CustomText} from '../index';
import {width} from '../../utils/index';
import {FontFamily} from '../../utils/Fontfamily';
import styles from './styles';
import AppColors from '../../utils/AppColors';

type KeyboardVariation =
  | 'default'
  | 'email-address'
  | 'number-pad'
  | 'decimal-pad'
  | 'numeric'
  | 'url'
  | 'phone-pad';

type KeyType =
  | 'done'
  | 'go'
  | 'next'
  | 'search'
  | 'send'
  | 'none'
  | 'previous'
  | 'default'
  | 'emergency-call'
  | 'google'
  | 'join'
  | 'route'
  | 'yahoo';

type AutoCapitalize = 'none' | 'sentences' | 'words' | 'characters';

interface Props {
  containerStyle?: ViewStyle;
  innerContainerStyle?: ViewStyle;
  iconContainerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  placeholder?: string;
  name: string;
  keyboardType?: KeyboardVariation;
  returnKeyType?: KeyType;
  maxlength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  secureTextEntry?: boolean;
  textAlignVertical?: 'auto' | 'center' | 'top' | 'bottom';
  autofocus?: boolean;
  control: any;
  icon?: () => React.ReactNode | void;
  title?: string;
  titleTextSize?: number;
  showPasswordIcon?: boolean;
  value?: string;
  onSubmitEditing?: () => void;
  autoCapitalize?: AutoCapitalize;
  titleColor?: string;
  isPasswordVisible?: boolean;
  onPressIcon?: () => void;
  textFont?: string;
}

const TextField = (
  {
    isPasswordVisible = false,
    showPasswordIcon = false,
    onPressIcon = () => true,
    containerStyle = {},
    innerContainerStyle = {},
    iconContainerStyle = {},
    inputStyle = {},
    placeholder = 'Enter text here!',
    name,
    keyboardType = 'default',
    returnKeyType = 'default',
    maxlength,
    multiline = false,
    numberOfLines,
    secureTextEntry = false,
    textAlignVertical = 'center',
    autofocus = false,
    control,
    titleColor,
    title = 'TextInput',
    titleTextSize = 4,
    onSubmitEditing,
    autoCapitalize = 'sentences',
    textFont = FontFamily.appFontMedium,
  }: Props,
  ref: any,
) => {
  return (
    <View style={[styles.container, containerStyle]} testID="textField">
      <Controller
        control={control}
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <>
            <View style={[styles.innerContainer, innerContainerStyle]}>
              <TextInput
                ref={ref}
                placeholder={placeholder}
                keyboardType={keyboardType}
                returnKeyType={returnKeyType}
                autoCapitalize={autoCapitalize}
                maxLength={maxlength}
                multiline={multiline}
                value={value}
                onChangeText={onChange}
                numberOfLines={numberOfLines}
                secureTextEntry={secureTextEntry}
                textAlignVertical={textAlignVertical}
                autoFocus={autofocus}
                placeholderTextColor={AppColors.grey10}
                style={[
                  styles.inputStyle,
                  inputStyle,
                  {
                    color: AppColors.black,
                    width: showPasswordIcon ? width(68) : width(77),
                  },
                ]}
                onSubmitEditing={onSubmitEditing}
                testID="input"
              />
            </View>
            <CustomText
              size={3}
              color={AppColors.red}
              textStyles={{marginTop: width(0.5)}}>
              {error ? `*${error?.message}` : ''}
            </CustomText>
          </>
        )}
        name={name}
      />
    </View>
  );
};

export default forwardRef(TextField);
