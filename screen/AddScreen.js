import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Axios from 'axios'; // Đảm bảo bạn đã cài đặt Axios

const AddScreen = () => {
  const [student, setStudent] = useState({
    tenUngVien: '',
    maUngVien: '',
    lop: '',
    email: '',
    diaChi: '',
  });

  const handleSave = () => {
    // Dữ liệu học sinh mới
    const newStudentData = {
      maUngVien: student.maUngVien,
      tenUngVien: student.tenUngVien,
      moTaKinhNghiem: student.lop, // Trong ví dụ này, lớp được gán vào moTaKinhNghiem
      email: student.email,
      diaChi: student.diaChi,
    };

    // Gửi dữ liệu lên server
    Axios.post('http://kiemtra.stecom.vn:8888/api/ung-vien/LVM12345/create', newStudentData)
      .then((response) => {
        // Xử lý kết quả nếu cần
        console.log('Thêm học sinh thành công', response.data);
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error('Lỗi khi thêm học sinh', error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={styles.header}>Thêm mới sinh viên</Text>
      </View>
      <View style={styles.mainItems}>
        <TextInput
          style={styles.input}
          placeholder="Tên sinh viên"
          onChangeText={(text) => setStudent({ ...student, tenUngVien: String })}
        />
        <TextInput
          style={styles.input}
          placeholder="MSSV"
          onChangeText={(text) => setStudent({ ...student, maUngVien: String })}
        />
        <TextInput
          style={styles.input}
          placeholder="Lớp"
          onChangeText={(text) => setStudent({ ...student, lop: String })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setStudent({ ...student, email: String })}
        />
        <TextInput
          style={styles.inputAddress}
          placeholder="Địa chỉ"
          onChangeText={(text) => setStudent({ ...student, diaChi: String })}
        />
        <View style={styles.buttonRow}>
          <Button title="Hủy bỏ" onPress={() => {}} />
          <Button title="Lưu lại" onPress={handleSave} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
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
    marginBottom: 20,
  },
  inputAddress: {
    height: 100,
    paddingBottom: 60,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default AddScreen;
