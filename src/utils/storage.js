import AsyncStorage from '@react-native-async-storage/async-storage';

class DeviceStorage {
  // get
  static get(key) {
    return AsyncStorage.getItem(key);
  }

  // set
  static set(key, value) {
    return AsyncStorage.setItem(key, value);
  }

  // clear
  static clear(key) {
    return AsyncStorage.clear(key);
  }
}

export {DeviceStorage};
