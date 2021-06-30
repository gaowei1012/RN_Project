import {Platform} from 'react-native';
import Toast from 'react-native-root-toast';

let toast;

const showToast = content => {
  if (toast !== undefined) {
    Toast.hide(toast);
  }

  toast = Toast.show(content, {
    duration: 900, // 时长
    position:
      Platform.OS === 'ios' ? Toast.positions.CENTER : Toast.positions.BOTTOM,
    shadow: true,
    animation: true, // 动画
    hideOnPress: true,
    delay: 0,
  });
};

export {showToast};
