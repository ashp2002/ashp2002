import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { Dimensions } from 'react-native';

import { AppleOnlyWifiDevices } from './Devices';

export const hasNotch = DeviceInfo.hasNotch(); // check iphone x
export const isIOS = Platform.OS === 'ios';
export const isAndroid = !isIOS;
export const getReadableVersion = DeviceInfo.getReadableVersion();
export const getVersion = getReadableVersion.substring(0, getReadableVersion.lastIndexOf('.'));
const getPhoneNumber = DeviceInfo.getPhoneNumber();
const getDeviceModel = DeviceInfo.getDeviceId();
const { width, height } = Dimensions.get('window');
// Theme is supported by system on iOS 13+ or Android 10+
export const supportSystemTheme = () => {
  const systemVersion = parseInt(DeviceInfo.getSystemVersion(), 10);
  return systemVersion >= (isIOS ? 13 : 10);
};

export const isIos14 = () => {
  const systemVersion = parseInt(DeviceInfo.getSystemVersion(), 10);
  return isIOS && systemVersion >= 14;
};

// Tablet info
export const isTablet = DeviceInfo.isTablet();

// Check devices had sim (Android) or only wifi mode (iOS)
export const isOnlyWifi = () => {
  if (isIOS) {
    return AppleOnlyWifiDevices.includes(getDeviceModel);
  } else {
    return true;
  }
};

export const isPortrait = () => {
  if (width < height) {
    return true;
  } else {
    return false;
  }
};

export const isiPhone = () => {
  return !!(Platform.OS === 'ios' && getDeviceModel && getDeviceModel.indexOf('iPhone') >= 0);
};
