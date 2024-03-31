import React, {useRef, useState} from 'react';
import dayjs from 'dayjs';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useForm} from 'react-hook-form';
import ScreenWrapper from '../../../components/screen-wrapper/index';
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import {CustomText, H1} from '../../../components/index';
import AppColors from '../../../utils/AppColors';
import {FontFamily} from '../../../utils/Fontfamily';
import {height, width} from '../../../utils/index';
import Button from '../../../components/button/index';
import {IconsLifafa} from '../../../assets/image/index';
import TextField from '../../../components/textField/index';
import commonStyles from '../../../utils/common-styles';
import Clock from '../../../assets/SVG/clock';
import DropDownModal from '../../../components/drop-down-modal/index';
import Modal from '../../../components/modal/index';
import EnvelopeAnimation from '../../../components/EnvelopeAnimation';

function Header() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          source={IconsLifafa.lifafaLogo}
          style={{
            borderRadius: 10,
            width: width(15),
            height: width(15),
            resizeMode: 'contain',
            marginVertical: width(5),
            marginLeft: width(5),
            marginRight: width(2),
          }}
        />
        <H1 fontFam={FontFamily.appFontBold} size={width(1.5)}>
          Lifafa
        </H1>
      </View>
      <View
        style={{
          borderWidth: width(0.2),
          borderRadius: width(2),
          paddingHorizontal: width(2),
          alignItems: 'center',
          marginRight: width(5),
        }}>
        <CustomText font={FontFamily.appFontBold}>FAQ</CustomText>
      </View>
    </View>
  );
}

function Envelop() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <ImageBackground source={IconsLifafa.capture} style={styles.envelop}>
        <CustomText
          font={FontFamily.appFontBold}
          center
          color={'#ff80bf'}
          size={5}
          textStyles={{
            width: width(90),
            marginTop: width(5),
          }}>
          An envelop for your{'\n'}loved ones
        </CustomText>
        <CustomText
          color={AppColors.gray}
          textStyles={{
            width: width(90),
            marginTop: width(5),
          }}
          font={FontFamily.appFontBold}
          center>
          Gift crypto to your friends!
        </CustomText>
      </ImageBackground>
    </View>
  );
}

const Signin = ({navigation}) => {
  const messageTextFieldRef = useRef(null);
  const [showTime, setShowTime] = useState(null);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const handleCancel = () => {
    setTimePickerVisibility(false);
    setShowTime(null);
  };
  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirm = time => {
    setShowTime(time);
    setTimePickerVisibility(false);
  };
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    mode: 'all',
  });
  const [modal, setModal] = useState(false);
  console.log(modal);
  return (
    <ScreenWrapper
      scrollType="keyboard"
      transclucent
      scrollEnabled
      paddingBottom={0}
      paddinTop={0}
      backgroundColor="white"
      statusBarColor="white"
      barStyle="dark-content">
      <View style={styles.main}>
        {/* Header */}
        <Header />

        {/* Envelop */}
        <Envelop />
        {/* <EnvelopeAnimation /> */}


        
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <CustomText
              size={4}
              textStyles={{marginVertical: width(5)}}
              font={FontFamily.appFontBold}>
              Create Lifafa
            </CustomText>
            <CustomText
              size={4}
              color={AppColors.gray}
              textStyles={{marginVertical: width(5)}}
              font={FontFamily.appFontBold}>
              Bal : 1065 USDT
            </CustomText>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              marginBottom: width(5),
              width: width(80),
              alignSelf: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              paddingHorizontal: width(2),
              justifyContent: 'space-between',
              borderColor: AppColors.lightGray,
              height: width(18),
              borderWidth: width(0.3),
              borderRadius: width(3),
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={IconsLifafa.crypto}
                style={{width: width(10), height: width(10)}}
              />
              <View>
                <CustomText
                  font={FontFamily.appFontBold}
                  size={4}
                  textStyles={{marginLeft: width(3)}}>
                  USDT
                </CustomText>

                <CustomText textStyles={{marginLeft: width(3)}}>
                  on Polygon
                </CustomText>
              </View>
              <TouchableOpacity>
                <Image
                  source={IconsLifafa.dropdown}
                  style={{
                    width: width(5),
                    height: width(5),
                    marginLeft: -20,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <CustomText font={FontFamily.appFontBold} size={4}>
                50
              </CustomText>
              <CustomText>4164.83</CustomText>
            </View>
          </View>
          <TextField
            control={control}
            name="people"
            keyboardType="number-pad"
            placeholder="Select no. of Persons"
          />

          <TouchableOpacity
            style={styles.timePicker}
            onPress={() => {
              setTimePickerVisibility(true);
            }}>
            <CustomText
              color={AppColors.black80}
              size={3.5}
              textStyles={commonStyles.marginLeft_2}>
              {showTime ? dayjs(showTime).format('DD MM YYYY') : 'Select Date'}
            </CustomText>
            <Clock color={AppColors.black} width={18} />
          </TouchableOpacity>
          <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
            <TextField
              title="Drop your message here"
              control={control}
              numberOfLines={5}
              multiline
              textAlignVertical="top"
              containerStyle={{height: width(20), marginBottom: width(5)}}
              innerContainerStyle={{height: width(30)}}
              inputStyle={{height: width(30)}}
              name="message"
              ref={messageTextFieldRef}
              onFocus={() => {
                // Scroll the TextField into view when it receives focus
                messageTextFieldRef.current.measureInWindow(
                  (x, y, width, height) => {
                    const scrollResponder =
                      messageTextFieldRef.current.getScrollResponder();
                    scrollResponder.scrollTo({x: 0, y: y, animated: true});
                  },
                );
              }}
              placeholder="Drop your message here!"
            />
          </KeyboardAvoidingView>
          <Button
            title="Create"
            containerStyle={{marginTop: height(6), marginBottom: height(7)}}
            onPress={() => {
              setModalVisible(true);
            }}
          />
        </View>


        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />

        <DropDownModal
          isVisible={modalVisible}
          onClose={() => {
            setModalVisible(false);
          }}
          onCreated={() => {
            setModalVisible(false);
            setModal(true);
          }}
          onPress={val => {
            setModalVisible(false);
          }}
        />

        <Modal
          isVisible={modal}
          onClose={() => setModal(false)}
          onPress={val => {
            console.log('hi');
          }}
        />


      </View>
    </ScreenWrapper>
  );
};

export default Signin;
