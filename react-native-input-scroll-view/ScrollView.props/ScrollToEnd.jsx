import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Button
} from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';

const ScrollViewPropsInput = () => {
  const [text, setText] = useState('');
  const myRef = useRef(null);
  return (
    <View style={styles.container}>
      
      <InputScrollView
        ref={myRef}
        keyboardOffset={100}
      >
        <View style={styles.placeholder} />
        <Button title='scrollToEnd' onPress={() => {
          myRef.current.scrollToEnd({animated: true})
        }} />
        <TextInput
          style={styles.input}
          value={text}
          multiline
          onChangeText={setText}
        />
      </InputScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
  },
  placeholder: {
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#FFF',
  },
});

export default ScrollViewPropsInput;
