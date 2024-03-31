import {useIsFocused} from '@react-navigation/native';
import React, {Fragment} from 'react';
import {ImageBackground, SafeAreaView, StatusBar, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppColors from '../../utils/AppColors';
import {height} from '../../utils/index';
import styles from './styles';

export default function ScreenWrapper({
  children,
  statusBarColor = AppColors.white,
  transclucent = false,
  scrollEnabled = false,
  backgroundImage,
  containerViewStyle = {},
  contentContainerStyle = {},
  headerUnScrollable = () => null,
  footerUnScrollable = () => null,
  backgroundColor = AppColors.transparent,
  imageBackgroundColor = AppColors.black,
  barStyle = 'dark-content',
  paddingBottom = 2,
  paddinTop = 2,
}) {
  if (backgroundImage) {
    backgroundColor = AppColors.transparent;
  }
  function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
  }
  const content = () => {
    return (
      <>
        {headerUnScrollable()}
        <View
          style={[
            styles.mainViewContainer,
            containerViewStyle,
            {
              backgroundColor: transclucent
                ? AppColors.transparent
                : backgroundColor,
            },
          ]}>
          <>
            {scrollEnabled ? (
              <KeyboardAwareScrollView
                contentContainerStyle={[
                  contentContainerStyle,
                  {
                    paddingBottom: height(paddingBottom),
                    paddingTop: height(paddinTop),
                  },
                ]}
                keyboardShouldPersistTaps="handled"
                extraScrollHeight={height(8)}
                showsVerticalScrollIndicator={false}>
                {children}
              </KeyboardAwareScrollView>
            ) : (
              children
            )}
            {footerUnScrollable()}
          </>
        </View>
      </>
    );
  };
  return (
    <Fragment>
      <FocusAwareStatusBar
        barStyle={barStyle}
        backgroundColor={statusBarColor}
        translucent={transclucent}
      />
      {!transclucent && (
        <SafeAreaView style={{backgroundColor: statusBarColor}} />
      )}
      {backgroundImage ? (
        <ImageBackground
          testID="imageBg"
          source={backgroundImage}
          style={[styles.container, {backgroundColor: imageBackgroundColor}]}
          resizeMode={'cover'}>
          {content()}
        </ImageBackground>
      ) : (
        content()
      )}
    </Fragment>
  );
}
