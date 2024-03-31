import React from 'react';
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {IconsLifafa} from '../../assets/image/index';
import Clock from '../../assets/SVG/clock';
import AppColors from '../../utils/AppColors';
import {FontFamily} from '../../utils/Fontfamily';
import {height, width} from '../../utils/index';
import Button from '../button/index';
import {CustomText} from '../index';
import ModalWrapper from '../modal-wrapper/index';
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
  maincontainer?: ViewStyle;
}
const Modal: React.FC<Props> = ({
  modalContainer,
  modalStyling,
  maincontainer,
  isVisible,
  container,
  onClose,
}) => {
  return (
    <ModalWrapper
      containerStyle={{backgroundColor: AppColors.transparent}}
      isVisible={isVisible}
      onClose={() => console.log('close')}
      mainContainer={{
        justifyContent: 'center',
        backgroundColor: AppColors.transparent,
      }}>
      <View style={[maincontainer ?? styles.mainContainer, container]}>
        <View>
          <ImageBackground
            source={IconsLifafa.capture}
            style={{width: width(90), height: width(70)}}
            resizeMode="stretch">
            <CustomText
              size={4}
              font={FontFamily.appFontSemiBold}
              center
              color={'#ff80bf'}
              textStyles={{marginTop: width(6)}}>
              Lifafa Created!
            </CustomText>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                marginLeft: -10,
              }}>
              <Image
                source={IconsLifafa.crypto}
                style={{
                  width: width(10),
                  height: width(10),
                  marginTop: width(1),
                  marginHorizontal: width(2),
                }}
              />
              <CustomText
                size={6}
                font={FontFamily.appFontBold}
                center
                lineHeight={width(8)}
                color={'#ff80bf'}
                textStyles={{marginTop: width(2)}}>
                50 USDT
              </CustomText>
            </View>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width(60),
                marginTop: width(7),
                alignSelf: 'center',
                paddingHorizontal: width(7),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Clock width={20} height={20} color={'black'} />
                <CustomText size={4} font={FontFamily.appFontBold} center>
                  {'  '}
                  12 Days
                </CustomText>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  source={IconsLifafa.person}
                  style={{
                    width: width(8),
                    height: width(8),
                    marginRight: width(1),
                  }}
                />
                <CustomText size={4} font={FontFamily.appFontBold} center>
                  100
                </CustomText>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: width(92),
            justifyContent: 'space-between',
            marginBottom: width(5),
            marginTop: width(5),
          }}>
          <Button
            widthbtn={width(40)}
            title="Copy Link"
            color={AppColors.black}
            containerStyle={{
              width: width(44),
              borderColor: AppColors.white,
              borderWidth: width(0.3),
              backgroundColor: 'white',
            }}
            onPress={onClose}
          />
          <Button
            widthbtn={width(40)}
            title="Share"
            color={AppColors.black}
            containerStyle={{
              width: width(44),
              borderColor: AppColors.white,
              borderWidth: width(0.3),
              backgroundColor: 'white',
            }}
            onPress={onClose}
          />
        </View>
      </View>
    </ModalWrapper>
  );
};
export default Modal;
