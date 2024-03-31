import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/index';
import AppColors from '../../utils/AppColors';
const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    padding: 0,
    margin: 0,
  },

  modalInnerContainer: {
    borderTopRightRadius: width(4),
    borderTopLeftRadius: width(4),
    backgroundColor: AppColors.white,
    paddingVertical: height(1),
    alignItems: 'center',
  },
});
export default styles;
