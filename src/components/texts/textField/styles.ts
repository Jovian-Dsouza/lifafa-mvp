import {Platform, StyleSheet} from 'react-native';
import {height, width} from '~utils/Dimension';
import {FontFamily} from '~utils/Fontfamily';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: width(80),
  },
  iconstyle: {
    marginLeft: width(70),
    width: width(10),
    height: width(10),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    width: width(80),
    borderWidth: width(0.2),
    borderRadius: width(2),
    paddingHorizontal: width(1.8),
    paddingTop: width(0.5),
  },
  inputStyle: {
    width: width(77),
    fontFamily: FontFamily.appFontLight,
    fontSize: width(3.5),
    justifyContent: 'center',
    height: Platform?.OS === 'ios' ? height(5.5) : height(6),
  },
  title: {
    left: width(1),
    marginBottom: width(2),
  },
});

export default styles;
