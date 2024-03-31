import React from 'react';
import {View, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
interface Props {
  children?: React.ReactNode;
  isVisible: boolean;
  containerStyle?: ViewStyle;
  avoidKeyboard?: boolean;
  onClose?(): void;
  animationIn?: 'slideInUp' | 'zoomInUp';
  animationOut?: 'slideOutDown' | 'zoomOutDown';
  mainContainer?: ViewStyle;
  animationInTiming?: number;
  animationOutTiming?: number;
}
const ModalWrapper = ({
  mainContainer,
  children,
  isVisible,
  onClose,
  containerStyle,
  animationIn = 'slideInUp',
  animationOut = 'slideOutDown',
  avoidKeyboard = false,
  animationInTiming = 300,
  animationOutTiming = 300,
}: Props) => {
  return (
    <Modal
      isVisible={isVisible}
      style={mainContainer ? mainContainer : styles.modalContainer}
      animationIn={animationIn}
      animationOut={animationOut}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      animationInTiming={animationInTiming}
      animationOutTiming={animationOutTiming}
      avoidKeyboard={avoidKeyboard}
      backdropOpacity={0.9}
      testID="modal">
      <View
        testID="inner-view"
        style={[
          containerStyle ? containerStyle : styles.modalInnerContainer,
          ,
        ]}>
        {children}
      </View>
    </Modal>
  );
};
export default ModalWrapper;
