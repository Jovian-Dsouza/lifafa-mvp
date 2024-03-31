import {StyleSheet} from 'react-native';
import AppColors from '../../../utils/AppColors';
import {height, width} from '../../../utils/index';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingBottom: width(12),
    backgroundColor: 'white',
    paddingVertical: width(8),
  },
  back: {
    width: width(15),
    height: width(15),
    resizeMode: 'contain',
    marginVertical: width(5),
    marginLeft: width(5),
    marginRight: width(2),
  },
  envelop: {
    marginTop: -2,
    width: width(90),
    height: width(52),
    resizeMode: 'stretch',
    marginVertical: width(5),
    marginLeft: width(5),
    marginRight: width(2),
  },
  container: {
    backgroundColor: '#ffe6f2',
    borderTopEndRadius: width(5),
    borderTopStartRadius: width(5),
    paddingHorizontal: width(5),
    marginBottom: -70,
  },
  timePicker: {
    justifyContent: 'space-between',
    width: width(80),
    height: width(15),
    borderColor: AppColors.lightGray,
    marginBottom: width(5),
    backgroundColor: AppColors.white,
    paddingHorizontal: width(3),
    paddingVertical: width(1),
    borderRadius: width(3),
    flexDirection: 'row',
    borderWidth: width(0.3),
    alignItems: 'center',
    alignSelf: 'center',
  },
  row: {
    width: width(100),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: height(5),
  },
  row1: {
    marginTop: width(8),
    paddingHorizontal: width(5),
    width: width(100),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  box: {
    height: width(20),
    backgroundColor: AppColors.primaryBlack,
    width: width(43),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: width(10),
    height: width(10),
    resizeMode: 'contain',
  },
});
export default styles;
