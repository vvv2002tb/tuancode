import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Button,
  Modal,
} from 'react-native';

const StudentDetailScreen = ({route}) => {
  return (
    <View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Text style={style1.container}>Thông tin sinh viên</Text>
      </View>
      <View style={style1.mainItems}>
        <View>
          <Text style={style1.textStyle}>Tên sinh viên</Text>
          <TextInput
            style={style1.input}
            placeholder="Nguyễn Văn A"           
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={style1.textStyle}>MSSV</Text>
          <TextInput
            style={style1.input}
            placeholder="1234564"           
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={style1.textStyle}>Lớp</Text>
          <TextInput
            style={style1.input}
            placeholder="64CS"           
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={style1.textStyle}>Email</Text>
          <TextInput
            style={style1.input}
            placeholder="vana@gmail.com"           
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={style1.textStyle}>Địa chỉ</Text>
          <TextInput
            style={style1.inputAddress}
            placeholder="Số 55 Giải Phóng, Hai Bà Trưng Hà Nội"           
          />
        </View>
        <View style={style1.butonrow}>
          <Button title='hủy bỏ' />
          <Button title='Xóa thông tin sinh viên' />
        </View>
      </View>
    </View>
  );
};

const style1 = StyleSheet.create({
  container: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainItems: {
    padding: 20,
  },
  input: {
    height: 45,
    
    borderWidth: 1,
    padding: 10,
  },
  inputAddress: {
    height: 100,
    paddingBottom: 60,
    borderWidth: 1,
    padding: 10,
  },
  textStyle: {
    marginBottom: 5,
    fontWeight: 'bold',

  },
  butonrow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  }

});
export default StudentDetailScreen;

