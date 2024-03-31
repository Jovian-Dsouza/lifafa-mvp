import {Platform, StyleSheet} from 'react-native';
import AppColors from '../../utils/AppColors';
import {width, height} from '../../utils/index';
import {FontFamily} from '../../utils/Fontfamily';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(8),
    backgroundColor: AppColors.black,
    height: height(6),
    width: width(85),
    alignSelf: 'center',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(2),
    height: height(9),
    width: width(90),
    alignSelf: 'center',
  },
});
export default styles;
