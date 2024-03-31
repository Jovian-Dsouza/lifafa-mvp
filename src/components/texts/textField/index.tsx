import React, {forwardRef} from 'react';
import {Controller} from 'react-hook-form';
import {TextInput, TouchableOpacity, View, ViewStyle} from 'react-native';
import {HidePassword, ShowPassword} from '~assets/SVG';
import {CustomText} from '~components/texts';
import {getThemeColors} from '~config';
import {CommonStyles} from '~utils/CommonStyles';
import {width} from '~utils/Dimension';
import {FontFamily} from '~utils/Fontfamily';
import styles from './styles';

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
  const colors = getThemeColors();
  return (
    <View style={[styles.container, containerStyle]} testID="textField">
      <CustomText
        fontFam={textFont}
        size={titleTextSize}
        color={titleColor ?? colors.onBackground}
        textStyles={styles.title}>
        {title}
      </CustomText>
      <Controller
        control={control}
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <>
            <View
              style={[
                styles.innerContainer,
                innerContainerStyle,
                {
                  borderColor: colors.primary,
                  backgroundColor: colors.neutral100,
                },
              ]}>
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
                placeholderTextColor={colors.neutral10}
                style={[
                  styles.inputStyle,
                  inputStyle,
                  {
                    color: colors.neutral,
                    width: showPasswordIcon ? width(68) : width(77),
                  },
                ]}
                onSubmitEditing={onSubmitEditing}
                testID="input"
              />
              {showPasswordIcon && value?.length > 0 ? (
                <View style={[iconContainerStyle, styles.iconstyle]}>
                  <TouchableOpacity onPress={onPressIcon}>
                    {isPasswordVisible ? (
                      <HidePassword color={colors.primary} />
                    ) : (
                      <ShowPassword color={colors.primary} />
                    )}
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
            <CustomText
              size={3}
              color={colors.error}
              textStyles={CommonStyles.marginTop_0_5}>
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
