import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {DeviceStorage} from '../utils/storage';
import {showToast} from '../utils/toast';

const Login = props => {
  const [str, setStr] = useState('');
  const [detail, setDetail] = useState('');

  const [is_show, setIsShow] = useState(false);

  useEffect(() => {
    set_val();
  }, []);

  useEffect(() => {
    // 保存 _key
    async function save() {
      await DeviceStorage.set('test1', JSON.stringify('123'));
    }
    save();
  }, []);

  useEffect(() => {
    // 获取 _key
    async function get() {
      const test1 = await DeviceStorage.get('test1');
      console.log('tset1=====>>>', test1);
    }
    get();
  }, []);

  // 获取焦点时候输出
  const onBlur = () => {
    const key = 'hello';
    if (str == key) {
      setIsShow(!is_show);
    } else {
      setIsShow(!is_show);
    }
  };

  // 设置缓存值
  const set_val = async () => {
    await DeviceStorage.set('test', JSON.stringify('hello storage'));
  };

  // 获取缓存值
  const get_val = async () => {
    const test = await DeviceStorage.get('test');
    const test1 = await DeviceStorage.get('test1');
    if (test) {
      setDetail(test);
    }
  };

  // 获取输入值
  const onChangeText = text => {
    console.log('=====>>>', text);
    setStr(text);
  };

  return (
    <SafeAreaView>
      <View>
        <Text>login</Text>
        <TextInput
          editable
          maxLength={40}
          onChangeText={text => {
            onChangeText(text);
          }}
          onBlur={onBlur}
          placeholder="请输入用户名"
          style={styles.textInput}
        />
        <View style={styles.bottom}>
          {is_show ? <Text>显示</Text> : <Text>隐藏</Text>}
        </View>
        <TouchableOpacity style={styles.bottom} onPress={get_val}>
          <Text>点击获取storage的值</Text>
        </TouchableOpacity>
        <Text style={styles.bottom}>我是storage获取的值：{detail}</Text>
        <TouchableOpacity onPress={() => showToast('显示Toast成功!')}>
          <Text>显示Toast</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  bottom: {
    marginBottom: 10,
  },
});
