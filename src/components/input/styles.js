import {StyleSheet} from 'react-native';
import AppColors from '../../utils/AppColors';
import {width} from '../../utils/index';

const styles = StyleSheet.create({
  contaier: {
    backgroundColor: AppColors.white,
    width: width(90),
    height: width(15),
    borderRadius: width(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: AppColors.lightGray,
    borderWidth: width(0.3),
  },
});
export default styles;
