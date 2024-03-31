import * as React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import AppColors from '../../utils/AppColors';
import {width} from '../../utils/index';
import styles from './styles';

const Textinput = ({
  title,
  containerStyle,
  keyboardType,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  const [text, setText] = React.useState('');
  const [secureText, setSecureText] = React.useState(false);
  return (
    <View style={[styles.contaier, containerStyle]}>
      <TextInput
        label={title}
        value={value ?? text}
        keyboardType={keyboardType}
        type="outlined"
        onChangeText={text =>
          onChangeText ? onChangeText(text) : setText(text)
        }
        textColor={AppColors.black}
        underlineColor={AppColors.transparent}
        selectionColor={'#56565A'}
        secureTextEntry={secureText}
        underlineStyle={{
          display: 'none',
        }}
        cursorColor={'#56565A'}
        theme={{
          colors: {
            onSurfaceVariant: 'white',
            primary: '#8A8A8A',
          },
        }}
        style={{
          width: width(80),

          height: width(20),
          borderWidth: 0,
          backgroundColor: AppColors.transparent,
        }}
      />
    </View>
  );
};

export default Textinput;
