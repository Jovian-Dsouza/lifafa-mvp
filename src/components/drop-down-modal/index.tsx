import React, {useState} from 'react';
import {Image, View, ViewStyle} from 'react-native';
import {IconsLifafa} from '../../assets/image/index';
import AppColors from '../../utils/AppColors';
import {FontFamily} from '../../utils/Fontfamily';
import {height, width} from '../../utils/index';
import Button from '../button/index';
import {CustomText} from '../index';
import ModalWrapper from '../modal-wrapper/index';
import Modal from '../modal/index';
import styles from './styles';

interface Props {
  isVisible: boolean;
  onClose: () => void;
  onPress: (val?: string | any) => void;
  Search?: boolean;
  onChangeText?: (val: string) => void;
  onEndReached?: () => void;
  ListFooterComponent?: React.ReactElement | null;
  container?: ViewStyle;
  modalContainer?: ViewStyle;
  modalStyling?: ViewStyle;
  onCreated: () => void;
  maincontainer?: ViewStyle;
}
const DropDownModal: React.FC<Props> = ({
  modalContainer,
  modalStyling,
  maincontainer,
  isVisible,
  container,
  onClose,
  onCreated,
}) => {
  return (
    <ModalWrapper
      containerStyle={modalStyling}
      isVisible={isVisible}
      onClose={onClose}
      mainContainer={modalContainer}>
      <View style={[maincontainer ?? styles.mainContainer, container]}>
        <Image
          source={IconsLifafa.logo1}
          resizeMode="contain"
          style={{width: width(15), height: width(15)}}
        />
        <CustomText
          size={6}
          font={FontFamily.appFontBold}
          lineHeight={30}
          textStyles={{marginTop: width(7), marginBottom: width(3)}}>
          Transaction Request
        </CustomText>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <CustomText
            size={4}
            font={FontFamily.appFontBold}
            lineHeight={30}
            underLine>
            Lifafa
          </CustomText>
          <CustomText size={4} font={FontFamily.appFontMedium} lineHeight={30}>
            {'  '}
            wants to Transact from your wallet.
          </CustomText>
        </View>
        <CustomText size={3.8} font={FontFamily.appFontMedium} lineHeight={30}>
          Once Confirmed you can track order from Activity.
        </CustomText>
      </View>
      <View
        style={{
          backgroundColor: AppColors.white,
          width: width(88),
          borderRadius: width(4),
          height: height(15),
          borderColor: AppColors.lightGray,
          borderWidth: width(0.2),
        }}>
        <View
          style={{
            backgroundColor: '#ffe6f2',
            borderTopEndRadius: width(4),
            borderTopStartRadius: width(4),
            paddingHorizontal: width(5),
            paddingVertical: width(2),
          }}>
          <CustomText
            color={AppColors.gray}
            size={4}
            font={FontFamily.appFontMedium}
            lineHeight={30}>
            Create a Lifafa with
          </CustomText>
          <CustomText
            color={AppColors.black}
            size={4}
            font={FontFamily.appFontBold}
            lineHeight={30}>
            50 USDT
          </CustomText>
        </View>
        <View
          style={{
            marginHorizontal: width(5),
            marginTop: width(2),
          }}>
          <CustomText
            color={AppColors.gray}
            size={4}
            font={FontFamily.appFontMedium}
            lineHeight={30}>
            Fees: 0.5 (0.006 USDT)
          </CustomText>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={IconsLifafa.verified}
          style={{
            width: width(7),
            height: width(7),
            marginRight: width(2),
          }}
          resizeMode="contain"
        />
        <CustomText
          color={AppColors.gray}
          size={4}
          left
          textStyles={{width: width(80), marginVertical: width(6)}}
          font={FontFamily.appFontMedium}
          lineHeight={30}>
          This request is from a verified app
        </CustomText>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: width(92),
          justifyContent: 'space-between',
          marginBottom: width(5),
        }}>
        <Button
          widthbtn={width(40)}
          title="Accept"
          containerStyle={{
            width: width(44),
          }}
          onPress={onCreated}
        />
        <Button
          widthbtn={width(40)}
          title="Reject"
          color={AppColors.red}
          containerStyle={{
            width: width(44),
            borderColor: AppColors.red,
            borderWidth: width(0.3),
            backgroundColor: 'white',
          }}
          onPress={onClose}
        />
      </View>
    </ModalWrapper>
  );
};
export default DropDownModal;
