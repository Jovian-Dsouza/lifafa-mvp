import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Animated} from 'react-native';

const EnvelopeAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const flapRotationValue = useState(new Animated.Value(0))[0];
  const letterPositionValue = useState(new Animated.Value(0))[0];

  const handleOpen = () => {
    setIsOpen(true);
    Animated.timing(flapRotationValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
     Animated.timing(letterPositionValue, {
       toValue: 1,
       duration: 400,
       useNativeDriver: true,
     }).start();
  };

  const handleClose = () => {
    setIsOpen(false);
    Animated.timing(flapRotationValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(letterPositionValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const flapRotation = flapRotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const letterPosition = letterPositionValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -60],
  });

  const letterOpacity = letterPositionValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View style={styles.envelopeWrapper}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.envelope}
        onPress={isOpen ? handleClose : handleOpen}>
        <Animated.View
          style={[
            styles.front,
            styles.flap,
            {
              transform: [
                {translateY: -42},
                {rotateX: flapRotation},
                {translateY: 42},
              ],
            },
            isOpen ? styles.flapOpen : styles.flapClose,
          ]}
        />

        <View style={[styles.front, styles.pocket]} />

        <Animated.View
          style={[
            styles.letter,
            {
              transform: [
                {translateY: letterPosition},
                
              ],
              opacity: letterOpacity,
            },
          ]}>
          <Text style={styles.words}>Line 1</Text>
          <Text style={styles.words}>Line 2</Text>
          <Text style={styles.words}>Line 3</Text>
          <Text style={styles.words}>Line 4</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  envelopeWrapper: {
    height: 350,
  },
  envelope: {
    position: 'relative',
    width: 280,
    height: 180,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    marginLeft: 'auto',
    marginRight: 'auto',
    top: 150,
    backgroundColor: '#662129',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  },
  front: {position: 'absolute', width: 0, height: 0, zIndex: 3},
  flap: {
    borderLeftWidth: 140,
    borderRightWidth: 140,
    borderTopWidth: 86,
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#e64b5d',
    zIndex: 10,
  },
  flapOpen: {
    borderTopColor: '#662129',
  },
  flapClose: {
    borderTopColor: '#e64b5d',
  },
  letter: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 180,
    backgroundColor: '#ffdae1',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 26,
    padding: 10,
    marginHorizontal: 15,
    zIndex: 11,
    borderWidth: 1,
    borderColor: 'black',
  },
  words: {
    marginBottom: 10,
  },
  pocket: {
    position: 'absolute',
    top: 0,
    height: 180,
    borderWidth: 0,
    borderBottomWidth: 90,
    borderTopWidth: 90,
    borderLeftWidth: 140,
    borderRightWidth: 140,
    borderStyle: 'solid',
    borderBottomColor: '#e64b5d',
    borderLeftColor: '#ff5367',
    borderRightColor: '#ff5367',
    borderTopColor: 'transparent',
    zIndex: 30,
  },
});

export default EnvelopeAnimation;
